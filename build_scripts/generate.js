const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

// Make sure output dir exists
const outDir = path.join(__dirname, '../dist');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Copy public assets
console.log("Copying public assets...");
spawnSync('cp', ['-r', path.join(__dirname, '../public/') + '.', outDir]);

// Generate HTML using wget against the local server
console.log("Generating HTML pages from local server...");
const routes = [
  '/', '/about/seputar', '/about/visi-misi',
  '/program/english-course', '/program/playetracy', '/program/ipdc',
  '/kurikulum', '/admission', '/artikel', '/news', '/kontak', '/galeri'
];

routes.forEach(route => {
  const url = `http://localhost:3000${route}`;
  let outFile = path.join(outDir, route);
  if (route === '/') {
    outFile = path.join(outDir, 'index.html');
  } else {
    // create dir if it doesn't exist
    if (!fs.existsSync(outFile)) fs.mkdirSync(outFile, { recursive: true });
    outFile = path.join(outFile, 'index.html');
  }
  
  console.log(`Generating: ${url} -> ${outFile}`);
  spawnSync('wget', ['-q', '-O', outFile, url]);
});

console.log("Static export completed in /dist");
