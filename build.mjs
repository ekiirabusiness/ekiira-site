import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';
import { SITE, DIMS, layout, esc } from './src/lib/layout.mjs';

const root = process.cwd();
const dist = path.join(root, 'dist');
const src = (...p) => path.join(root, 'src', ...p);
const out = (...p) => path.join(dist, ...p);

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.cpSync(src('static'), dist, { recursive: true });
fs.cpSync(src('static', 'products', 'pinner'), out('pinner'), { recursive: true });
fs.rmSync(out('products'), { recursive: true, force: true });
for (const f of ['robots.txt', 'sitemap.xml', '.site-manifest.json']) fs.rmSync(out('pinner', f), { force: true });

// Pinner is a standalone copy; its header link to EKIIRA needs the new location.
for (const f of fs.readdirSync(out('pinner')).filter((n) => n.endsWith('.html'))) {
  const p = out('pinner', f);
  fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replaceAll('href="../../index.html"', 'href="/"'));
}

// fingerprinted assets
const hashed = (file, name, ext) => {
  const buf = fs.readFileSync(file);
  const h = crypto.createHash('sha1').update(buf).digest('hex').slice(0, 8);
  fs.mkdirSync(out('assets'), { recursive: true });
  const n = `/assets/${name}.${h}.${ext}`;
  fs.writeFileSync(out(n), buf);
  return n;
};
const assets = { css: hashed(src('css', 'main.css'), 'main', 'css'), js: hashed(src('js', 'site.js'), 'site', 'js') };

// image dimensions
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
for (const f of walk(out('img'))) {
  if (/\.(png|webp|jpg|svg)$/i.test(f)) {
    const m = await sharp(f).metadata();
    DIMS['/' + path.relative(dist, f).replaceAll('\\', '/')] = [m.width, m.height];
  }
}

// icons
const mark = fs.readFileSync(src('static', 'brand', 'ekiira-mark.svg'));
const png = (size) => sharp(mark, { density: 600 }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();
fs.writeFileSync(out('img', 'logo-512.png'), await png(512));
fs.writeFileSync(out('img', 'icon-192.png'), await png(192));
fs.writeFileSync(out('img', 'apple-touch-icon.png'), await png(180));
const ico = await png(48);
const hdr = Buffer.alloc(22);
hdr.writeUInt16LE(0, 0); hdr.writeUInt16LE(1, 2); hdr.writeUInt16LE(1, 4);
hdr[6] = 48; hdr[7] = 48; hdr.writeUInt16LE(1, 12); hdr.writeUInt16LE(32, 14); hdr.writeUInt32LE(ico.length, 14 + 4); hdr.writeUInt32LE(22, 18);
fs.writeFileSync(out('favicon.ico'), Buffer.concat([hdr, ico]));
fs.writeFileSync(out('site.webmanifest'), JSON.stringify({ name: 'EKIIRA', short_name: 'EKIIRA', start_url: '/', display: 'browser', background_color: '#08090a', theme_color: '#08090a', icons: [{ src: '/img/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/img/logo-512.png', sizes: '512x512', type: 'image/png' }] }));

// pages
const mods = await Promise.all(['home', 'mother', 'products'].map((m) => import(`./src/pages/${m}.mjs`)));
const pages = mods.flatMap((m) => m.pages);

const wrap = (text, n) => { const lines = []; let l = ''; for (const w of text.split(' ')) { if ((l + ' ' + w).trim().length > n) { lines.push(l); l = w; } else l = (l + ' ' + w).trim(); } if (l) lines.push(l); return lines.slice(0, 4); };
const markPath = 'M17 16H49L45 24H25.5V28.5H42L38.5 35.5H25.5V40H49L45 48H17Z';
async function og(page, file) {
  const lines = wrap(page.ogHeadline || page.title, 24);
  const color = /pinner/.test(page.theme || '') ? '#f2b84b' : /fieldscope/.test(page.theme || '') ? '#2dd4bf' : /screenplayx/.test(page.theme || '') ? '#a78bfa' : '#ff4a1c';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#08090a"/><g stroke="#15181a" stroke-width="1">${Array.from({ length: 19 }, (_, i) => `<path d="M${i * 64} 0V630"/>`).join('')}${Array.from({ length: 10 }, (_, i) => `<path d="M0 ${i * 64}H1200"/>`).join('')}</g><rect x="0" y="0" width="12" height="630" fill="${color}"/><g transform="translate(80 70) scale(1.3)"><rect width="64" height="64" rx="15" fill="#ff4a1c"/><path d="${markPath}" fill="#fff"/></g><text x="180" y="122" font-family="Segoe UI, Arial, sans-serif" font-size="40" font-weight="800" letter-spacing="6" fill="#f3f4f1">EKIIRA</text><text x="80" y="250" font-family="Consolas, monospace" font-size="26" letter-spacing="5" fill="${color}">${esc((page.ogKicker || 'EKIIRA').toUpperCase())}</text>${lines.map((l, i) => `<text x="80" y="${330 + i * 78}" font-family="Segoe UI, Arial, sans-serif" font-size="70" font-weight="800" fill="#f3f4f1">${esc(l)}</text>`).join('')}<text x="80" y="590" font-family="Consolas, monospace" font-size="24" fill="#6f7673">Local-first creative software · ekiira.com</text></svg>`;
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true }).toFile(file);
}

fs.mkdirSync(out('og'), { recursive: true });
const seen = new Set();
for (const p of pages) {
  if (seen.has(p.path)) throw new Error('duplicate path ' + p.path);
  seen.add(p.path);
  const slug = p.path === '/' ? 'home' : p.path.replace(/^\/|\/$|\.html$/g, '').replaceAll('/', '-');
  await og(p, out('og', slug + '.png'));
  p.ogImage = `/og/${slug}.png`;
  if (p.title.length > 62 && p.path !== '/') console.warn('long title:', p.path, p.title.length);
  if (p.desc.length > 160) console.warn('long desc:', p.path, p.desc.length);
  const file = p.path.endsWith('.html') ? out(p.path) : out(p.path, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, layout(p, assets));
}

const today = new Date().toISOString().slice(0, 10);
const urls = pages.filter((p) => !p.noindex && !p.notInSitemap).map((p) => `<url><loc>${SITE.url}${p.path}</loc><lastmod>${today}</lastmod><priority>${p.path === '/' ? '1.0' : p.path.split('/').length <= 3 ? '0.8' : '0.6'}</priority></url>`);
fs.writeFileSync(out('sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
fs.writeFileSync(out('robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
fs.writeFileSync(out('humans.txt'), `EKIIRA LLP, Kolkata, India\n`);
fs.writeFileSync(out('_headers'), `/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: SAMEORIGIN\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n\n/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n/fonts/*\n  Cache-Control: public, max-age=31536000, immutable\n/img/*\n  Cache-Control: public, max-age=2592000\n/brand/*\n  Cache-Control: public, max-age=2592000\n`);
console.log(`Built ${pages.length} pages -> dist`);
