(function () {
  const rail = document.getElementById("rail");
  const frame = document.getElementById("page");

  function pathFromHash() {
    const h = location.hash.replace(/^#/, "");
    return h ? decodeURIComponent(h) : "";
  }

  function stripHtmlExt(href) {
    return href.replace(/\.html(?=(\?|#|$))/i, "");
  }

  function toFrameSrc(href) {
    if (!href) return href;
    const trimmed = href.trim();
    if (/^(pages\/)?md(\.html)?(\?|#|$)/i.test(trimmed)) {
      return stripHtmlExt(trimmed.replace(/^(md)(\.html)?/i, "pages/md$2"));
    }
    const pathOnly = trimmed.split("#")[0].split("?")[0];
    if (/\.md$/i.test(pathOnly)) {
      return "pages/md?src=" + encodeURIComponent(pathOnly);
    }
    return stripHtmlExt(trimmed);
  }

  function setActive(href) {
    rail.querySelectorAll("a").forEach((a) => {
      const src = a.getAttribute("data-src");
      a.classList.toggle("active", src === href || toFrameSrc(src) === toFrameSrc(href));
    });
  }

  function load(href, push) {
    if (!href || !frame) return;
    frame.src = toFrameSrc(href);
    setActive(href);
    const next = "#" + encodeURIComponent(href);
    if (push) history.pushState(null, "", next);
    else if (location.hash !== next) history.replaceState(null, "", next);
  }

  fetch("menu.html")
    .then((r) => r.text())
    .then((html) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      const nav = doc.querySelector("nav") || doc.body;
      rail.innerHTML = "";
      nav.querySelectorAll("h2, a").forEach((el) => {
        if (el.tagName === "H2") {
          const d = document.createElement("div");
          d.className = "rail-label rail-group";
          d.textContent = el.textContent;
          rail.appendChild(d);
        } else {
          const href = el.getAttribute("href");
          const a = document.createElement("a");
          a.setAttribute("href", "#" + encodeURIComponent(href));
          a.setAttribute("data-src", href);
          a.textContent = el.textContent.trim();
          a.addEventListener("click", (e) => {
            e.preventDefault();
            load(href, true);
          });
          rail.appendChild(a);
        }
      });
      const start = pathFromHash() || (rail.querySelector("a") && rail.querySelector("a").getAttribute("data-src"));
      if (start) load(start, false);
    })
    .catch((err) => {
      rail.innerHTML = "<div class=\"rail-label\">Could not load menu.html</div>";
      console.error(err);
    });

  window.addEventListener("hashchange", () => {
    const p = pathFromHash();
    if (p) load(p, false);
  });
})();
