import { SITE, PRODUCTS, icon, btn, sec, head, cards, productCard, row, ticks, cta, table, faqHtml, pageHead, steps } from '../lib/layout.mjs';

const C = { home: ['Home', '/'] };
const prose = (inner) => `<section class="sec tight"><div class="wrap"><div class="prose">${inner}</div></div></section>`;
const legalPage = (slug, title, desc, trail, body) => ({
  path: `/legal/${slug}/`, title, desc, crumbs: [C.home, ['Legal', '/legal/'], [trail, `/legal/${slug}/`]], ogKicker: 'Legal',
  html: pageHead(title, '', [C.home, ['Legal', '/legal/'], [trail, `/legal/${slug}/`]]) + prose(body + `<p class="small muted">Last updated: ${new Date().toISOString().slice(0, 10)}. Issued by ${SITE.legalName}, ${SITE.address}. Contact: ${SITE.email}.</p>`),
});
const draft = '<div class="note"><p><strong>Draft notice.</strong> This summary describes our intended practices and will be replaced by the final, legally reviewed text before products are sold. It does not yet create contractual obligations.</p></div>';

const supportFaqs = [
  ['How do I contact support?', `Email ${SITE.email}. The address will be published here once confirmed. Please do not send unreleased scripts, client images or project databases.`],
  ['Do your apps send telemetry?', 'No. Our apps do not include analytics or advertising SDKs. Optional features such as licence validation, purchase restore or streaming contact only the services needed for that feature.'],
  ['Are the products sold as a bundle?', 'No. Each product is licensed individually. Free tiers, lifetime or annual options vary per product and are shown on each pricing page.'],
  ['Where can I buy?', 'Secure checkout and global licensing are handled by Dodo Payments, our Merchant of Record. Store links appear on each product page when purchasing opens.'],
];

export const pages = [
  {
    path: '/products/', title: 'Products: Pinner, FieldScope Pro and ScreenplayX',
    desc: 'Compare EKIIRA\'s local-first creative software: Pinner for photographers, FieldScope Pro for Android field monitoring and ScreenplayX for pre-production.',
    ogKicker: 'Products', ogHeadline: 'Three tools. Each sold on its own.', crumbs: [C.home, ['Products', '/products/']],
    html: pageHead('Three tools. Each sold on its own.', 'Pick the one that solves your problem. Every EKIIRA product works independently, and none requires a subscription to the others.', [C.home, ['Products', '/products/']])
      + sec(`<div class="grid c3">${PRODUCTS.map((p) => productCard(p)).join('')}</div>`)
      + sec(head('Compare', 'At a glance', '') + table(['', 'Pinner', 'FieldScope Pro', 'ScreenplayX'], [
        ['For', 'Photographers and studios', 'Cinematographers, DITs, camera operators', 'Writers, directors, producers'],
        ['What it does', 'References, RAW culling, shoot planning, casting, projects', 'HDMI field monitor with scopes, plus manual phone camera', 'Screenplay, beat boards, shot lists, scheduling'],
        ['Platform', 'Windows, Android, Chrome extension', 'Android', 'Windows (macOS planned)'],
        ['Data', 'Stored on your devices', 'On-device, no account', 'Local project database'],
        ['Licensing', 'Free tier; Pro adds sync and removes limits', 'Free app with one-time Pro unlock', 'Annual or lifetime licence'],
      ]) + '<p class="muted small">Pricing is set at purchase. Checkout by Dodo Payments (Merchant of Record).</p>', 'alt')
      + cta('Not sure where to start?', 'Tell us about your workflow and we will point you to the right tool.', btn('Contact the studio', '/contact/', 'primary')),
  },
  {
    path: '/about/', title: 'About EKIIRA: an independent software studio in Kolkata',
    desc: 'EKIIRA LLP is a small independent studio in Kolkata, India, building private, local-first software for photographers and filmmakers.',
    ogKicker: 'The studio', ogHeadline: 'Small team. Big impact.', crumbs: [C.home, ['About', '/about/']],
    html: pageHead('A small studio, on purpose.', 'EKIIRA merges software engineering with fine-art photography and cinematic storytelling to solve real problems on set.', [C.home, ['About', '/about/']])
      + sec(row(`<p class="eyebrow">Why we exist</p><h2>Professionals should not have to rent their tools forever.</h2><p>Creative software drifted toward subscriptions, mandatory clouds and data harvesting. We believe photographers and filmmakers deserve tools that are fast, private and theirs.</p><p>EKIIRA is based in Kolkata, India. Our apps replace fragmented, expensive subscriptions with focused, hardware-accelerated, local-first software.</p>`,
        cards([{ icon: 'lock', title: 'Local-first and private', text: 'Your files, your models, your data. We never harvest your work to train AI.' }, { icon: 'tag', title: 'Fair, a-la-carte pricing', text: 'Buy individually. Free tiers, lifetime licences and affordable annual options.' }, { icon: 'cpu', title: 'Hardware honesty', text: 'We tune for the phones, tablets and PCs you already own.' }, { icon: 'hand', title: 'Indie craftsmanship', text: 'Built by working creatives and developers who use the tools on set.' }])))
      + cta('Questions, ideas, or a problem on set?', 'We read everything and build for the problems creatives actually report.', btn('Get in touch', '/contact/', 'primary') + btn('See the products', '/products/')),
  },
  {
    path: '/support/', title: 'Support and documentation',
    desc: 'Get help with Pinner, FieldScope Pro and ScreenplayX: product FAQs, setup guides and how to contact EKIIRA.',
    ogKicker: 'Support', ogHeadline: 'Help, docs and answers.', crumbs: [C.home, ['Support', '/support/']], faqs: supportFaqs,
    html: pageHead('Support and documentation', 'Start with the product guides, then contact us if you are still stuck.', [C.home, ['Support', '/support/']])
      + sec(head('Product help', 'Find your product', '') + `<div class="grid c3">
<a class="card t-pinner" href="/pinner/faq.html"><span class="spec">Pinner</span><h3>FAQ and support</h3><p>Answers on pinning, sync, culling and casting.</p><span class="more">Open ${icon('arrow')}</span></a>
<a class="card t-fieldscope" href="/products/fieldscope-pro/faq/"><span class="spec">FieldScope Pro</span><h3>FAQ and setup</h3><p>Capture cards, device compatibility and limits.</p><span class="more">Open ${icon('arrow')}</span></a>
<a class="card t-screenplayx" href="/products/screenplayx/support/"><span class="spec">ScreenplayX</span><h3>Support and FAQ</h3><p>Licences, projects and workflow.</p><span class="more">Open ${icon('arrow')}</span></a></div>`)
      + sec(head('General', 'Common questions', '') + faqHtml(supportFaqs), 'alt')
      + sec(head('Open source and roadmap', 'Transparency', '') + `<p class="muted">Third-party open-source acknowledgements ship with each application release and will be listed here. We publish product roadmaps on each product page where features are planned, and we state clearly what is not yet available.</p>`),
  },
  {
    path: '/contact/', title: 'Contact EKIIRA',
    desc: 'Contact EKIIRA LLP for product questions, support and press enquiries.', ogKicker: 'Contact', ogHeadline: 'Talk to the studio.', crumbs: [C.home, ['Contact', '/contact/']],
    html: pageHead('Contact EKIIRA', 'A small team reads every message.', [C.home, ['Contact', '/contact/']])
      + sec(`<div class="grid"><div class="card"><span class="spec">Email</span><h3>${SITE.email}</h3><p>Support, sales and press. Final address to be published.</p></div><div class="card"><span class="spec">Registered office</span><h3>EKIIRA LLP</h3><p>${SITE.address}</p></div><div class="card"><span class="spec">Studio</span><h3>Kolkata, India</h3><p>Please do not send unreleased scripts or client material by email.</p></div></div>`),
  },
  {
    path: '/brand/', title: 'EKIIRA brand kit: logo, colour and typography',
    desc: 'Download EKIIRA logos and read the brand guidelines: colour, typography, clear space and usage rules.', ogKicker: 'Brand', ogHeadline: 'The EKIIRA brand kit.', crumbs: [C.home, ['Brand', '/brand/']],
    html: pageHead('Brand kit', 'Industrial, precise and direct. One bold signal colour on graphite, with a distinct tone for each product.', [C.home, ['Brand', '/brand/']])
      + sec(head('Logo', 'Mark and wordmark', 'The E mark has bevelled bar ends that recall a cropped frame and a camera aperture blade. Keep clear space equal to the mark\'s corner radius times two, and never below 24px tall.') +
        `<div class="grid"><div class="logo-tile"><img src="/brand/ekiira-logo.svg" alt="EKIIRA logo on dark" width="194" height="32"></div><div class="logo-tile light"><img src="/brand/ekiira-logo-dark.svg" alt="EKIIRA logo on light" width="194" height="32"></div><div class="logo-tile"><img src="/brand/ekiira-mark.svg" alt="EKIIRA mark" width="64" height="64"></div></div>
<p class="muted small">Download: <a href="/brand/ekiira-logo.svg">Logo</a> · <a href="/brand/ekiira-logo-dark.svg">Logo for light backgrounds</a> · <a href="/brand/ekiira-mark.svg">Mark</a> · <a href="/brand/ekiira-wordmark.svg">Wordmark</a></p>`)
      + sec(head('Colour', 'Ember on graphite', '') + `<div class="swatches">
<div class="sw"><i style="background:#ff4a1c"></i><div><b>Ember</b>#FF4A1C · brand signal</div></div>
<div class="sw"><i style="background:#08090a"></i><div><b>Ink</b>#08090A · background</div></div>
<div class="sw"><i style="background:#15181a"></i><div><b>Graphite</b>#15181A · surface</div></div>
<div class="sw"><i style="background:#f3f4f1"></i><div><b>Bone</b>#F3F4F1 · text</div></div>
<div class="sw"><i style="background:#f2b84b"></i><div><b>Pinner Amber</b>#F2B84B</div></div>
<div class="sw"><i style="background:#2dd4bf"></i><div><b>FieldScope Teal</b>#2DD4BF</div></div>
<div class="sw"><i style="background:#a78bfa"></i><div><b>ScreenplayX Violet</b>#A78BFA</div></div></div>`, 'alt')
      + sec(head('Typography', 'Inter and JetBrains Mono', 'Inter for headlines and body. JetBrains Mono for specs, metadata and labels.') + `<p style="font-size:2.4rem;font-weight:800;letter-spacing:-.03em;margin:0">Professional tools you own.</p><p class="mono muted">ISO 800 · 1/48 · 5600K · 24 fps</p>`)
      + sec(head('Product marks', 'One family', '') + `<div class="grid">${PRODUCTS.map((p) => `<div class="logo-tile"><img src="${p.mark}" alt="${p.name} mark" width="64" height="64"></div>`).join('')}</div>`, 'alt')
      + sec(head('Voice', 'Confident, transparent, direct', '') + ticks(['Say what a product does and what it does not.', 'No fake testimonials, metrics or team members.', 'Speak about ownership, privacy and speed, not buzzwords.', 'Never describe EKIIRA products as a bundle or creative cloud.'])),
  },
  legalPage('privacy', 'Privacy policy', 'How EKIIRA handles data on this website and in its applications. No telemetry, no tracking.', 'Privacy',
    draft + `<h2>This website</h2><p>We do not use advertising or analytics trackers, and we set no tracking cookies on this website.</p><h2>Our applications</h2><p>Our applications are designed to work on your device with your files stored locally. They do not include analytics or advertising SDKs. We do not use your content to train AI models.</p><h2>Purchases and licensing</h2><p>Payments and licence delivery are processed by Dodo Payments as Merchant of Record under their own privacy terms. Licence validation may contact licensing endpoints but does not transmit your project content.</p><h2>Optional network features</h2><p>Features such as sync or streaming send data only to destinations you configure.</p><h2>Contact</h2><p>${SITE.email}</p>`),
  legalPage('terms', 'Terms of service', 'Terms for using the EKIIRA website and purchasing EKIIRA software.', 'Terms',
    draft + `<h2>Using this website</h2><p>The website is provided for information about EKIIRA products. Information may change as products develop.</p><h2>Purchases</h2><p>Purchases are processed by Dodo Payments as Merchant of Record. Pricing and availability are shown at checkout.</p><h2>Software</h2><p>Use of each application is governed by its End User Licence Agreement.</p><h2>Company</h2><p>${SITE.legalName}, ${SITE.address}.</p>`),
  legalPage('eula', 'End user licence agreement', 'Summary of EKIIRA end user licence terms for Pinner, FieldScope Pro and ScreenplayX.', 'EULA',
    draft + `<h2>Licence</h2><p>Each EKIIRA product is licensed, not sold. Licence types (free, annual, lifetime or one-time unlock) are described on each product pricing page.</p><h2>Your content</h2><p>You own what you create. We claim no rights over your scripts, photographs, footage or databases.</p><h2>Restrictions</h2><p>Do not reverse engineer, redistribute or share licence keys, except where law allows.</p>`),
  legalPage('refunds', 'Refund policy', 'EKIIRA refund policy summary, with payments handled by Dodo Payments.', 'Refunds',
    draft + `<h2>Refunds</h2><p>Refund terms will be confirmed before purchasing opens. Payments and refunds are processed by Dodo Payments as Merchant of Record.</p>`),
  {
    path: '/legal/', title: 'Legal and compliance', desc: 'EKIIRA LLP legal documents: privacy, terms, EULA and refunds.', crumbs: [C.home, ['Legal', '/legal/']], ogKicker: 'Legal',
    html: pageHead('Legal and compliance', `${SITE.legalName}`, [C.home, ['Legal', '/legal/']]) + sec(`<div class="grid">${[['privacy', 'Privacy policy'], ['terms', 'Terms of service'], ['eula', 'End user licence'], ['refunds', 'Refund policy']].map(([s, t]) => `<a class="card" href="/legal/${s}/"><h3>${t}</h3><span class="more">Read ${icon('arrow')}</span></a>`).join('')}</div>`),
  },
  {
    path: '/404.html', title: 'Page not found', desc: 'This page could not be found.', noindex: true, notInSitemap: true, ogKicker: 'EKIIRA', ogHeadline: 'Page not found.',
    html: `<section class="hero center"><div class="wrap"><p class="eyebrow">Error 404</p><h1>That frame is not in the cut.</h1><p class="lead">The page you wanted does not exist or has moved.</p><div class="btns">${btn('Go home', '/', 'primary')}${btn('Browse products', '/products/')}</div></div></section>`,
  },
];
