(function () {
  function sanitizeSrc(raw) {
    if (raw == null || raw === "") return null;
    var p;
    try {
      p = decodeURIComponent(String(raw)).trim();
    } catch (e) {
      return null;
    }
    p = p.replace(/\\/g, "/");
    if (!p) return null;
    if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(p)) return null;
    if (p.indexOf("//") === 0 || p.charAt(0) === "/") return null;
    var parts = p.split("/");
    var out = [];
    for (var i = 0; i < parts.length; i++) {
      var part = parts[i];
      if (part === "" || part === ".") continue;
      if (part === "..") return null;
      out.push(part);
    }
    if (!out.length) return null;
    return out.join("/");
  }

  function slugFromPath(p) {
    var parts = p.split("/").filter(Boolean);
    if (!parts.length) return "";
    var last = parts[parts.length - 1];
    if (/\.md$/i.test(last) && parts.length >= 2) return parts[parts.length - 2];
    return last.replace(/\.md$/i, "");
  }

  function titleFromPath(p) {
    return slugFromPath(p).replace(/-/g, " ");
  }

  function showError(msg) {
    document.getElementById("md-host").innerHTML =
      '<div class="md-err">' + msg + "</div>";
  }

  function boot() {
  var params = new URLSearchParams(location.search);
  var clean = sanitizeSrc(params.get("src"));
  if (!clean) {
    document.title = "Missing source";
    document.getElementById("md-title").textContent = "Missing source";
    document.getElementById("md-path").textContent =
      "Pass ?src= as a repo-relative .md path.";
    showError(
      "That path is not allowed. Use a relative path inside this site, with no http, no protocol, and no .."
    );
    return;
  }

  document.title = titleFromPath(clean);
  document.getElementById("md-title").textContent = titleFromPath(clean);
  document.getElementById("md-path").textContent = clean;

  var host = document.getElementById("md-host");
  var el = document.createElement("zero-md");
  var url = "../" + clean.split("/").map(encodeURIComponent).join("/");
  el.setAttribute("src", url);

  var tpl = document.createElement("template");
  tpl.setAttribute("data-append", "");
  var style = document.createElement("style");
  style.textContent = [
    ":host { font-family: Inter, Arial, sans-serif; color: #151515; background: transparent; }",
    ".markdown-body { background: transparent !important; color: #151515; font-family: Inter, Arial, sans-serif; font-size: 16px; line-height: 1.55; }",
    ".markdown-body h1, .markdown-body h2, .markdown-body h3, .markdown-body h4 { font-family: Space Grotesk, sans-serif; color: #151515; letter-spacing: -0.035em; }",
    ".markdown-body a { color: #151515; }",
    ".markdown-body img { max-width: 100%; height: auto; border: 1px solid #deded9; border-radius: 6px; }",
    ".markdown-body pre, .markdown-body code, .markdown-body .hljs { background: #eee !important; color: #151515 !important; }",
    ".markdown-body .hljs * { color: inherit !important; background: transparent !important; }",
    ".markdown-body table { border-color: #deded9; }",
    ".markdown-body blockquote { color: #686864; border-left-color: #151515; }"
  ].join("\n");
  tpl.content.appendChild(style);
  el.appendChild(tpl);
  host.appendChild(el);

  var slug = slugFromPath(clean);
  fetch("../design/shots/manifest.json")
    .then(function (r) {
      return r.ok ? r.json() : null;
    })
    .then(function (manifest) {
      if (!manifest || !slug || !manifest[slug] || !manifest[slug].length) return;
      var shots = manifest[slug];
      var section = document.createElement("div");
      section.className = "shots";
      var head = document.createElement("div");
      head.className = "eyebrow";
      head.textContent = "Shots";
      var h2 = document.createElement("h2");
      h2.textContent = slug.replace(/-/g, " ");
      h2.style.margin = "8px 0 22px";
      var grid = document.createElement("div");
      grid.className = "shots-grid";
      shots.forEach(function (shot) {
        var file = shot.file || "";
        if (!/\.jpe?g$/i.test(file) && !/\.png$/i.test(file) && !/\.webp$/i.test(file)) return;
        var fig = document.createElement("figure");
        var img = document.createElement("img");
        img.src = "../design/shots/" + file;
        img.alt = shot.title || shot.app || file;
        var cap = document.createElement("figcaption");
        var label = [shot.app, shot.title].filter(Boolean).join(" — ") || file;
        if (shot.url) {
          var a = document.createElement("a");
          a.href = shot.url;
          a.target = "_blank";
          a.rel = "noopener";
          a.textContent = label;
          cap.appendChild(a);
        } else {
          cap.textContent = label;
        }
        fig.appendChild(img);
        fig.appendChild(cap);
        grid.appendChild(fig);
      });
      if (!grid.childNodes.length) return;
      section.appendChild(head);
      section.appendChild(h2);
      section.appendChild(grid);
      host.appendChild(section);
    })
    .catch(function () {});
  }
  if (window.customElements && customElements.get("zero-md")) boot();
  else if (window.customElements) customElements.whenDefined("zero-md").then(boot);
  else boot();
})();
