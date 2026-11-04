#!/usr/bin/env node
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const publicDir = path.resolve(import.meta.dirname, "../public");
const port = Number(process.env.PORT || 3457);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".svg": "image/svg+xml",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
};

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url || "/", `http://127.0.0.1:${port}`);
  let pathname = urlObj.pathname === "/" ? "/ui-design-mockup.html" : urlObj.pathname;
  const filePath = path.join(publicDir, path.normalize(pathname));
  if (!filePath.startsWith(publicDir) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  const ext = path.extname(filePath);
  res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`NAUHub UI Design Mockup server running at http://127.0.0.1:${port}/ui-design-mockup.html`);
});
