import { writeFileSync } from "fs";
import { resolve } from "path";
import { pathToFileURL } from "url";

const serverEntry = resolve("dist/server/index.js");

let html;

try {
  // Import the TanStack Start server bundle and call it like a Cloudflare Workers fetch handler
  const { default: handler } = await import(pathToFileURL(serverEntry).href);
  const request = new Request("http://localhost/");
  const response = await handler.fetch(request, {}, { waitUntil: () => {}, passThroughOnException: () => {} });
  html = await response.text();
  console.log("✓ Prerendered / from server bundle");
} catch (err) {
  console.warn("⚠ Server prerender failed, falling back to static shell:", err.message);

  // Fallback: generate a minimal HTML shell from built assets
  const { readdirSync, readFileSync } = await import("fs");
  const assetsDir = "dist/client/assets";
  const files = readdirSync(assetsDir);

  const jsEntry = files
    .filter((f) => f.startsWith("index-") && f.endsWith(".js"))
    .map((f) => ({ name: f, size: readFileSync(`${assetsDir}/${f}`).length }))
    .sort((a, b) => a.size - b.size)[0]?.name;

  const cssFile = files.find((f) => f.startsWith("styles-") && f.endsWith(".css"));

  if (!jsEntry || !cssFile) {
    console.error("Could not find entry assets:", { jsEntry, cssFile });
    process.exit(1);
  }

  html = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Turinbike — Bici, noleggio e officina a Torino</title>
  <meta name="description" content="Noleggio bici, vendita e officina nel cuore di Torino. Tour guidati, e-bike, gravel e road. Let's b-hike." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap" />
  <link rel="stylesheet" href="/assets/${cssFile}" />
</head>
<body>
  <script type="module" src="/assets/${jsEntry}"></script>
</body>
</html>`;
}

writeFileSync("dist/client/index.html", html);
console.log("✓ Wrote dist/client/index.html");
