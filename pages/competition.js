(function () {
  var competitors = window.COMPETITION_DATA;
  var params = new URLSearchParams(location.search);
  var view = params.get("view") === "pricing" ? "pricing" : "landing";
  var selectedId = decodeURIComponent(location.hash.replace(/^#/, "")) || competitors[0].id;
  var selected = competitors.filter(function (item) { return item.id === selectedId; })[0] || competitors[0];
  var storagePrefix = "forwardslash:competition-note:";
  var saveTimer;
  var loadToken = 0;
  var sourceMode = "image";

  var browser = document.querySelector(".competition-browser");
  var list = document.getElementById("competitorList");
  var likes = document.getElementById("likes");
  var notes = document.getElementById("notes");
  var likeButton = document.getElementById("likeButton");
  var saveStatus = document.getElementById("saveStatus");
  var frame = document.getElementById("liveFrame");
  var stage = document.getElementById("viewerStage");
  var image = document.getElementById("referenceImage");
  var imageView = document.getElementById("imageView");
  var iframeView = document.getElementById("iframeView");
  var desktop = document.getElementById("desktopView");
  var mobile = document.getElementById("mobileView");

  document.getElementById("viewTitle").textContent = view === "pricing" ? "Pricing" : "Landing";
  document.getElementById("competitorCount").textContent = competitors.length;

  function noteKey() { return selected.id + "-" + view; }
  function pageUrl() { return selected[view]; }
  function mobbinReference() { return selected[view === "pricing" ? "mobbinPricing" : "mobbinLanding"] || null; }
  function capturePath() { return "../design/shots/competition/" + selected.id + "-" + view + ".png"; }

  function readLocal(key) {
    try { return JSON.parse(localStorage.getItem(storagePrefix + key)) || {}; }
    catch (error) { return {}; }
  }
  function writeLocal(key, record) {
    try { localStorage.setItem(storagePrefix + key, JSON.stringify(record)); }
    catch (error) {}
  }
  function applyNote(record) {
    likes.value = record.likes || "";
    notes.value = record.notes || "";
    likeButton.setAttribute("aria-pressed", record.liked ? "true" : "false");
    likeButton.querySelector("span:first-child").textContent = record.liked ? "★" : "☆";
  }
  function currentRecord() {
    return { liked:likeButton.getAttribute("aria-pressed") === "true", likes:likes.value, notes:notes.value, updatedAt:new Date().toISOString() };
  }
  async function loadNote() {
    var key = noteKey(), token = ++loadToken, local = readLocal(key);
    applyNote(local);
    saveStatus.textContent = local.updatedAt ? "Saved locally" : "Start typing — saves automatically";
    try {
      var response = await fetch("/api/competition-notes?key=" + encodeURIComponent(key), { headers:{ Accept:"application/json" } });
      if (!response.ok) return;
      var payload = await response.json();
      if (token !== loadToken || !payload.note) return;
      applyNote(payload.note); writeLocal(key, payload.note); saveStatus.textContent = "Saved · synced";
    } catch (error) {}
  }
  function save() {
    var key = noteKey(), record = currentRecord();
    writeLocal(key, record); saveStatus.textContent = "Saved locally · syncing…";
    clearTimeout(saveTimer);
    saveTimer = setTimeout(async function () {
      try {
        var response = await fetch("/api/competition-notes", { method:"PUT", headers:{ "Content-Type":"application/json" }, body:JSON.stringify({ key:key, note:record }) });
        saveStatus.textContent = response.ok ? "Saved · synced" : "Saved locally";
      } catch (error) { saveStatus.textContent = "Saved locally"; }
    }, 550);
  }

  function renderList() {
    var lastCategory = "";
    list.innerHTML = "";
    competitors.forEach(function (item) {
      if (item.category !== lastCategory) {
        var heading = document.createElement("div");
        heading.className = "list-heading"; heading.textContent = item.category; list.appendChild(heading); lastCategory = item.category;
      }
      var button = document.createElement("button");
      button.type = "button"; button.dataset.id = item.id; button.textContent = item.name;
      button.setAttribute("aria-selected", item.id === selected.id ? "true" : "false");
      button.addEventListener("click", function () { choose(item); });
      list.appendChild(button);
    });
  }

  function renderSelection() {
    var kind = view === "pricing" ? "Pricing" : "Landing";
    document.getElementById("selectedKind").textContent = kind;
    document.getElementById("selectedName").textContent = selected.name;
    document.getElementById("pageKind").textContent = kind;
    document.getElementById("viewerName").textContent = selected.name;
    document.getElementById("liveLink").href = pageUrl();
    var mobbin = mobbinReference();
    var mobbinLink = document.getElementById("mobbinLink");
    var sourceStatus = document.getElementById("sourceStatus");
    image.src = mobbin ? mobbin.image : capturePath();
    image.alt = selected.name + " " + kind.toLowerCase() + " page " + (mobbin ? "from Mobbin" : "capture");
    imageView.textContent = mobbin ? "Mobbin image" : "Page image";
    sourceStatus.textContent = mobbin ? "Mobbin reference · click Mobbin ↗ to open the source" : "Saved live-page capture · no exact Mobbin match found";
    mobbinLink.href = mobbin ? mobbin.url : "https://mobbin.com/browse/web/apps";
    mobbinLink.textContent = mobbin ? "Mobbin ↗" : "Search Mobbin ↗";
    document.getElementById("chatLink").href = "https://chatgpt.com/?q=" + encodeURIComponent("Help me analyse this " + kind.toLowerCase() + " page for " + selected.name + ": " + pageUrl());
    frame.title = selected.name + " " + kind.toLowerCase() + " page";
    frame.dataset.src = pageUrl();
    if (sourceMode === "iframe") frame.src = pageUrl();
    loadNote();
  }

  function choose(item) {
    selected = item;
    renderList(); renderSelection();
    history.replaceState(null, "", location.pathname + location.search + "#" + encodeURIComponent(selected.id));
    requestAnimationFrame(function () {
      notes.focus(); notes.setSelectionRange(notes.value.length, notes.value.length);
    });
  }

  function setDevice(device) {
    var isMobile = device === "mobile";
    stage.classList.toggle("mobile", isMobile);
    desktop.classList.toggle("active", !isMobile); mobile.classList.toggle("active", isMobile);
    desktop.setAttribute("aria-pressed", String(!isMobile)); mobile.setAttribute("aria-pressed", String(isMobile));
  }
  function setSource(mode) {
    sourceMode = mode === "iframe" ? "iframe" : "image";
    var isIframe = sourceMode === "iframe";
    stage.classList.toggle("mode-image", !isIframe);
    stage.classList.toggle("mode-iframe", isIframe);
    imageView.classList.toggle("active", !isIframe); iframeView.classList.toggle("active", isIframe);
    imageView.setAttribute("aria-pressed", String(!isIframe)); iframeView.setAttribute("aria-pressed", String(isIframe));
    if (isIframe && frame.src !== frame.dataset.src) frame.src = frame.dataset.src;
  }
  imageView.addEventListener("click", function () { setSource("image"); });
  iframeView.addEventListener("click", function () { setSource("iframe"); });
  desktop.addEventListener("click", function () { setDevice("desktop"); });
  mobile.addEventListener("click", function () { setDevice("mobile"); });
  likes.addEventListener("input", save); notes.addEventListener("input", save);
  likeButton.addEventListener("click", function () {
    var next = likeButton.getAttribute("aria-pressed") !== "true";
    likeButton.setAttribute("aria-pressed", String(next)); likeButton.querySelector("span:first-child").textContent = next ? "★" : "☆"; save(); notes.focus();
  });

  function setWidth(name, value) {
    var minimum = name === "list" ? 180 : 220;
    var maximum = name === "list" ? 390 : 440;
    var width = Math.max(minimum, Math.min(maximum, value));
    browser.style.setProperty(name === "list" ? "--competition-list-width" : "--competition-notes-width", width + "px");
    try { localStorage.setItem("forwardslash-competition-" + name + "-width", String(width)); } catch (error) {}
  }
  ["list", "notes"].forEach(function (name) {
    try { var stored = Number(localStorage.getItem("forwardslash-competition-" + name + "-width")); if (stored) setWidth(name, stored); } catch (error) {}
  });
  Array.prototype.forEach.call(document.querySelectorAll(".column-divider"), function (divider) {
    divider.addEventListener("pointerdown", function (event) {
      event.preventDefault(); browser.classList.add("is-resizing"); divider.setPointerCapture(event.pointerId);
      function move(next) {
        var rect = browser.getBoundingClientRect();
        if (divider.dataset.divider === "list") setWidth("list", next.clientX - rect.left);
        else setWidth("notes", next.clientX - rect.left - parseFloat(getComputedStyle(browser).getPropertyValue("--competition-list-width")) - 16);
      }
      function end() { browser.classList.remove("is-resizing"); divider.removeEventListener("pointermove", move); divider.removeEventListener("pointerup", end); divider.removeEventListener("pointercancel", end); }
      divider.addEventListener("pointermove", move); divider.addEventListener("pointerup", end); divider.addEventListener("pointercancel", end);
    });
  });

  renderList(); renderSelection(); setDevice("desktop"); setSource("image");
})();
