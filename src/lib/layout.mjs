export const SITE = {
  name: 'EKIIRA',
  legalName: 'EKIIRA LLP',
  url: (process.env.SITE_URL || 'https://ekiira.com').replace(/\/$/, ''),
  email: '[CONTACT_EMAIL_PLACEHOLDER]',
  address: '[REGISTERED_OFFICE_ADDRESS_PLACEHOLDER]',
  year: new Date().getFullYear(),
  defaultDesc: 'EKIIRA is an independent studio in Kolkata building local-first creative software for photographers and filmmakers. Buy only the tools you need, and own them.',
};

export const PRODUCTS = [
  { id: 'pinner', name: 'Pinner', path: '/products/pinner/', theme: 't-pinner',
    short: 'Photography studio system', tag: 'For photographers',
    pitch: 'Pin references, cull RAW shoots, plan the day and cast the talent, in one private studio.',
    mark: '/brand/pinner-mark.svg', art: '/img/pinner/pinner-library.webp', os: 'Windows, Android, Chrome' },
  { id: 'fieldscope', name: 'FieldScope Pro', path: '/products/fieldscope-pro/', theme: 't-fieldscope',
    short: 'Monitor and camera for Android', tag: 'For cinematographers',
    pitch: 'Turn an Android device into an HDMI field monitor with scopes and false colour, and a manual cinema camera.',
    mark: '/brand/fieldscope-mark.svg', art: '/img/fieldscope/06-waveform-scope.webp', os: 'Android' },
  { id: 'screenplayx', name: 'ScreenplayX', path: '/products/screenplayx/', theme: 't-screenplayx',
    short: 'Pre-production desktop suite', tag: 'For filmmakers',
    pitch: 'Write the script, board the beats, plan the shots and build the schedule in one linked project.',
    mark: '/brand/screenplayx-mark.svg', art: '/img/screenplayx-workflow.svg', os: 'Windows' },
];

const ICONS = {
  lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.2"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  hand: '<path d="M7 12V5a2 2 0 0 1 4 0v6M11 10V3a2 2 0 0 1 4 0v8M15 11V6a2 2 0 0 1 4 0v8a8 8 0 0 1-8 8H9a6 6 0 0 1-5-3l-2-4a2 2 0 0 1 3-2l2 2"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3v12H4z"/><circle cx="12" cy="13" r="4"/>',
  film: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 3v18M17 3v18M3 8h4M3 12h4M3 16h4M17 8h4M17 12h4M17 16h4"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  pen: '<path d="M4 20l1-5L17 3l4 4L9 19z"/><path d="M14 6l4 4"/>',
  scope: '<path d="M3 17l4-6 4 3 4-8 6 9"/><path d="M3 21h18"/>',
  pin: '<path d="M12 21s-6-5.5-6-10a6 6 0 0 1 12 0c0 4.5-6 10-6 10z"/><circle cx="12" cy="11" r="2"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 21a7 7 0 0 1 14 0M16 4.5a3.5 3.5 0 0 1 0 7M19 21a7 7 0 0 0-3-5.7"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  zap: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
};
export const icon = (n) => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ''}</svg>`;

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const abs = (p) => (/^https?:/.test(p) ? p : SITE.url + p);

/* content helpers */
export const crumbs = (list) => `<nav class="crumbs" aria-label="Breadcrumb"><ol>${list.map(([n, p], i) => i === list.length - 1 ? `<li aria-current="page">${esc(n)}</li>` : `<li><a href="${p}">${esc(n)}</a></li>`).join('')}</ol></nav>`;
export const btn = (label, href, kind = '') => href ? `<a class="btn ${kind}" href="${href}">${label}${kind === 'primary' ? icon('arrow') : ''}</a>` : `<span class="btn soon" role="note">${label}</span>`;
export const sec = (inner, cls = '', id = '') => `<section class="sec ${cls}"${id ? ` id="${id}"` : ''}><div class="wrap">${inner}</div></section>`;
export const head = (eyebrow, title, sub = '', center = false) => `<div class="sec-head${center ? ' center' : ''}">${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}<h2>${title}</h2>${sub ? `<p>${sub}</p>` : ''}</div>`;
export const cards = (items, cls = '') => `<div class="grid ${cls}">${items.map((c) => `<div class="card">${c.icon ? `<div class="ico">${icon(c.icon)}</div>` : ''}${c.spec ? `<span class="spec">${c.spec}</span>` : ''}<h3>${c.title}</h3><p>${c.text}</p></div>`).join('')}</div>`;
export const ticks = (items, no = false) => `<ul class="ticks${no ? ' no' : ''}">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
export const DIMS = {};
export const shot = (src, alt, cap, lazy = true) => { const d = DIMS[src] || [1600, 1000]; return `<figure class="shot"><img src="${src}" alt="${esc(alt)}" width="${d[0]}" height="${d[1]}" ${lazy ? 'loading="lazy" decoding="async"' : 'fetchpriority="high"'}>${cap ? `<figcaption>${cap}</figcaption>` : ''}</figure>`; };
export const dev = (src, kind, alt, lazy = true) => { const d = DIMS[src] || [1600, 1000]; return `<div class="dev ${kind}"><img src="${src}" alt="${esc(alt)}" width="${d[0]}" height="${d[1]}" ${lazy ? 'loading="lazy" decoding="async"' : 'fetchpriority="high"'}></div>`; };
export const row = (textHtml, mediaHtml, flip = false) => `<div class="row${flip ? ' flip' : ''}"><div>${textHtml}</div><div>${mediaHtml}</div></div>`;
export const table = (headers, rows) => `<div class="table-wrap"><table><thead><tr>${headers.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
export const faqHtml = (items) => items.map(([q, a]) => `<details class="faq"><summary>${q}</summary><p>${a}</p></details>`).join('');
export const steps = (items) => `<ol class="steps">${items.map(([t, d]) => `<li><strong>${t}</strong><span>${d}</span></li>`).join('')}</ol>`;
export const cta = (title, text, buttons) => `<section class="cta"><div class="wrap"><div class="box"><h2>${title}</h2><p>${text}</p><div class="btns">${buttons}</div></div></div></section>`;
export const hero = ({ eyebrow, title, lead, buttons = '', note = '', center = false, extra = '' }) => `<section class="hero${center ? ' center' : ''}"><div class="wrap">${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}<h1>${title}</h1><p class="lead">${lead}</p>${buttons ? `<div class="btns">${buttons}</div>` : ''}${note ? `<p class="hero-note">${note}</p>` : ''}${extra}</div></section>`;
export const pageHead = (title, lead, trail) => `<header class="page-head"><div class="wrap">${crumbs(trail)}<h1>${title}</h1>${lead ? `<p class="lead">${lead}</p>` : ''}</div></header>`;

export function productCard(p, art = true) {
  const img = art ? `<div class="pc-art"><img src="${p.art}" alt="" loading="lazy" decoding="async" width="800" height="500"></div>` : '';
  return `<a class="card pcard ${p.theme}" href="${p.path}">${img}<div class="pc-body"><div class="pc-head"><img src="${p.mark}" alt="" width="44" height="44"><div><span class="tagline">${p.tag}</span><h3>${p.name}</h3></div></div><p>${p.pitch}</p><span class="more">Explore ${p.name} ${icon('arrow')}</span></div></a>`;
}

/* layout */
const NAV = [['/products/', 'Products'], ['/about/', 'Studio'], ['/support/', 'Support'], ['/brand/', 'Brand']];

export function layout(page, assets) {
  const url = abs(page.path);
  const title = page.path === '/' ? page.title : `${page.title} | EKIIRA`;
  const og = abs(page.ogImage);
  const isHome = page.path === '/';
  const cur = (p) => (page.path === p || (p !== '/' && page.path.startsWith(p)) ? ' aria-current="page"' : '');
  const schema = [...(page.schema || [])];
  if (isHome) {
    schema.push({ '@context': 'https://schema.org', '@type': 'Organization', '@id': SITE.url + '/#org', name: SITE.legalName, alternateName: 'EKIIRA', url: SITE.url + '/', logo: abs('/img/logo-512.png'), description: SITE.defaultDesc, address: { '@type': 'PostalAddress', addressLocality: 'Kolkata', addressCountry: 'IN' } });
    schema.push({ '@context': 'https://schema.org', '@type': 'WebSite', '@id': SITE.url + '/#site', name: 'EKIIRA', url: SITE.url + '/', publisher: { '@id': SITE.url + '/#org' }, inLanguage: 'en' });
  }
  if (page.crumbs && page.crumbs.length > 1) {
    schema.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: page.crumbs.map(([n, p], i) => ({ '@type': 'ListItem', position: i + 1, name: n, item: abs(p) })) });
  }
  if (page.faqs) schema.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: page.faqs.map(([q, a]) => ({ '@type': 'Question', name: q.replace(/<[^>]+>/g, ''), acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })) });
  const ld = schema.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('');
  const prodLinks = PRODUCTS.map((p) => `<a href="${p.path}"><img src="${p.mark}" alt="" width="40" height="40"><span><strong>${p.name}</strong><span>${p.short}</span></span></a>`).join('');
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(page.desc)}">
<link rel="canonical" href="${url}">
${page.noindex ? '<meta name="robots" content="noindex,follow">' : '<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">'}
<meta name="theme-color" content="#08090a">
<link rel="icon" href="/favicon.ico" sizes="48x48"><link rel="icon" type="image/svg+xml" href="/brand/ekiira-mark.svg"><link rel="apple-touch-icon" href="/img/apple-touch-icon.png">
<meta property="og:site_name" content="EKIIRA"><meta property="og:type" content="website"><meta property="og:locale" content="en"><meta property="og:title" content="${esc(page.ogTitle || title)}"><meta property="og:description" content="${esc(page.desc)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${og}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="${esc(page.ogAlt || page.title)}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(page.ogTitle || title)}"><meta name="twitter:description" content="${esc(page.desc)}"><meta name="twitter:image" content="${og}">
<link rel="preload" href="/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${assets.css}">
${page.preload ? `<link rel="preload" as="image" href="${page.preload}" fetchpriority="high">` : ''}
${ld}
</head>
<body class="${page.theme || ''}">
<a class="skip" href="#main">Skip to content</a>
<header class="top"><div class="wrap">
<a class="brand" href="/" aria-label="EKIIRA home"><img src="/brand/ekiira-logo.svg" alt="EKIIRA" width="194" height="32"></a>
<button class="burger" type="button" aria-label="Menu" aria-controls="nav" aria-expanded="false"><span></span></button>
<nav class="nav" id="nav" aria-label="Main">
<details class="menu"><summary>Products</summary><div class="drop">${prodLinks}<a href="/products/"><span><strong>Compare all products</strong><span>Side by side</span></span></a></div></details>
${NAV.slice(1).map(([p, n]) => `<a href="${p}"${cur(p)}>${n}</a>`).join('')}
<a class="nav-cta" href="/products/">Explore the tools</a>
</nav></div></header>
<main id="main">
${page.html}
</main>
<footer class="site-foot"><div class="wrap">
<div class="foot">
<div><a class="brand" href="/" aria-label="EKIIRA home"><img src="/brand/ekiira-logo.svg" alt="EKIIRA" width="194" height="32"></a><p>Independent, local-first creative software for photographers and filmmakers. Made in Kolkata, India.</p></div>
<div><h2>Products</h2><ul>${PRODUCTS.map((p) => `<li><a href="${p.path}">${p.name}</a></li>`).join('')}<li><a href="/products/">Compare</a></li></ul></div>
<div><h2>Studio</h2><ul><li><a href="/about/">About</a></li><li><a href="/support/">Support</a></li><li><a href="/contact/">Contact</a></li><li><a href="/brand/">Brand kit</a></li></ul></div>
<div><h2>Legal</h2><ul><li><a href="/legal/privacy/">Privacy</a></li><li><a href="/legal/terms/">Terms</a></li><li><a href="/legal/eula/">EULA</a></li><li><a href="/legal/refunds/">Refunds</a></li></ul></div>
<div><h2>Contact</h2><ul><li>${SITE.email}</li></ul></div>
</div>
<div class="legal-line"><p>© ${SITE.year} EKIIRA LLP. All rights reserved.</p><p>Registered office: ${SITE.address}</p><p>Secure checkout and global licensing are handled by Dodo Payments, our Merchant of Record. Product names are trademarks of EKIIRA LLP.</p></div>
</div></footer>
<script src="${assets.js}" defer></script>
</body></html>`;
}
