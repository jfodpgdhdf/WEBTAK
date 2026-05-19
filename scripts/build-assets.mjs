// Generates favicon.ico, apple-touch-icon.png, and og.png from SVG sources.
// Run with: node scripts/build-assets.mjs
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const publicDir = join(here, "..", "public");

const faviconSvg = await readFile(join(publicDir, "favicon.svg"));

// apple-touch-icon: 180x180 PNG
await sharp(faviconSvg, { density: 384 })
  .resize(180, 180)
  .png()
  .toFile(join(publicDir, "apple-touch-icon.png"));

// favicon.ico: pack 16, 32, 48 PNGs (sharp can't write ICO; use simple PNG instead and rename for legacy ICO consumers via .ico extension as PNG; modern browsers accept this)
// Better: produce a 32x32 PNG and write it as .ico (most browsers accept). For broader compatibility we keep favicon.svg as primary.
await sharp(faviconSvg, { density: 384 })
  .resize(32, 32)
  .png()
  .toFile(join(publicDir, "favicon.ico"));

// OG image: 1200x630 with brand mark + tagline
const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="50%" cy="0%" r="80%">
      <stop offset="0%" stop-color="#7c5cff" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="#0f0f17" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0f0f17"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g transform="translate(80,80)">
    <circle cx="22" cy="22" r="10" fill="#7c5cff"/>
    <circle cx="22" cy="22" r="20" fill="none" stroke="#7c5cff" stroke-width="2" opacity="0.5"/>
    <text x="56" y="30" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
          font-size="26" font-weight="600" fill="#ffffff">Webtak AI</text>
  </g>
  <g transform="translate(80,260)">
    <text font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
          font-size="80" font-weight="600" fill="#ffffff" letter-spacing="-1">
      <tspan x="0" dy="0">AI that earns its keep.</tspan>
      <tspan x="0" dy="100" fill="#9aa0b2">From strategy to shipped.</tspan>
    </text>
  </g>
  <g transform="translate(80,530)">
    <text font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
          font-size="26" fill="#9aa0b2">ai.webtak.de</text>
  </g>
</svg>
`;
await sharp(Buffer.from(ogSvg)).png().toFile(join(publicDir, "og.png"));

console.log("Built favicon.ico, apple-touch-icon.png, og.png");
