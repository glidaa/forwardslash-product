# forwardslash.ch product book

Static book. index.html is the shell. Edit menu.html to hang pages. Old JS book stays at book.html (Notes).

## Markdown pages

Drop a .md file anywhere in the repo, add one line, it renders as a book page.
Renders in our Swiss black and white type.

1. Put the file in the repo (design/!reference/<slug>/README.md or pages/notes/foo.md).
2. Add one line to menu.html pointing at that .md path, OR link from another page through the md wrapper (pages/md plus a src query with the repo-relative path). Inside pages/, the wrapper is next to features.html. Vercel cleanUrls: no .html on the wrapper.
3. If the path slug matches design/shots/manifest.json, jpgs from design/shots/<slug>/ show under the markdown.
4. Do not href a raw .md so the browser downloads it. Always go through the md wrapper.

Features (pages/features.html) is the 23-surface index. Each card opens the rendered take.
Example wrapper: pages/md?src=design/!reference/inbox/README.md
Menu line: <a href="design/!reference/inbox/README.md">Inbox</a>  (menu.js routes .md clicks to the wrapper).

