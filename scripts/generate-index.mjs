import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const assetsDir = "dist/client/assets";
const files = readdirSync(assetsDir);

// Entry chunk is the smallest index-*.js (imports the larger component bundle)
const jsEntry = files
  .filter((f) => f.startsWith("index-") && f.endsWith(".js"))
  .map((f) => ({ name: f, size: readFileSync(join(assetsDir, f)).length }))
  .sort((a, b) => a.size - b.size)[0]?.name;

const cssFile = files.find((f) => f.startsWith("styles-") && f.endsWith(".css"));

if (!jsEntry || !cssFile) {
  console.error("Could not find entry assets:", { jsEntry, cssFile });
  process.exit(1);
}

const html = `<!DOCTYPE html>
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

writeFileSync("dist/client/index.html", html);
console.log(`✓ Generated dist/client/index.html (${jsEntry}, ${cssFile})`);
