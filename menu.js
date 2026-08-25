(function () {
  const rail = document.getElementById("rail");
  const frame = document.getElementById("page");

  function pathFromHash() {
    const h = location.hash.replace(/^#/, "");
    if (!h) return "";
    try {
      return decodeURIComponent(h);
    } catch (e) {
      return h;
    }
  }

  function stripHtmlExt(href) {
    return href.replace(/\.html(?=(\?|#|$))/i, "");
  }

  function encodeKeepSlashBang(s) {
    return encodeURIComponent(s).replace(/%2F/gi, "/").replace(/%21/g, "!");
  }

  function decodeComp(s) {
    try {
      return decodeURIComponent(s);
    } catch (e) {
      return s;
    }
  }

  function normalizeQuery(query) {
    if (!query) return "";
    return query.split("&").filter(Boolean).map((part) => {
      const eq = part.indexOf("=");
      const k = decodeComp(eq === -1 ? part : part.slice(0, eq));
      const v = decodeComp(eq === -1 ? "" : part.slice(eq + 1));
      return encodeKeepSlashBang(k) + "=" + encodeKeepSlashBang(v);
    }).join("&");
  }

  function splitHref(href) {
    const hashIdx = href.indexOf("#");
    const withoutHash = hashIdx === -1 ? href : href.slice(0, hashIdx);
    const frag = hashIdx === -1 ? "" : href.slice(hashIdx);
    const qIdx = withoutHash.indexOf("?");
    const path = qIdx === -1 ? withoutHash : withoutHash.slice(0, qIdx);
    const query = qIdx === -1 ? "" : withoutHash.slice(qIdx + 1);
    return { path, query, frag };
  }

  function toFrameSrc(href) {
    if (!href) return href;
    const trimmed = href.trim();
    if (/^(pages\/)?md(\.html)?(\?|#|$)/i.test(trimmed)) {
      const rewritten = trimmed.replace(/^(md)(\.html)?/i, "pages/md$2");
      const parts = splitHref(rewritten);
      const q = normalizeQuery(parts.query);
      return stripHtmlExt(parts.path) + (q ? "?" + q : "") + parts.frag;
    }
    const pathOnly = trimmed.split("#")[0].split("?")[0];
    if (/\.md$/i.test(pathOnly)) {
      return "pages/md?src=" + encodeKeepSlashBang(decodeComp(pathOnly));
    }
    const parts = splitHref(trimmed);
    const q = normalizeQuery(parts.query);
    return stripHtmlExt(parts.path) + (q ? "?" + q : "") + parts.frag;
  }

  function toHash(href) {
    return "#" + toFrameSrc(href);
  }

  function setActive(href) {
    rail.querySelectorAll("a").forEach((a) => {
      const src = a.getAttribute("data-src");
      a.classList.toggle("active", src === href || toFrameSrc(src) === toFrameSrc(href));
    });
  }

  function load(href, push) {
    if (!href || !frame) return;
    const src = toFrameSrc(href);
    frame.src = src;
    setActive(href);
    const next = "#" + src;
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
          a.setAttribute("href", toHash(href));
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
