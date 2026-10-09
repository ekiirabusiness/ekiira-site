import { SITE, PRODUCTS, icon, hero, btn, sec, head, cards, productCard, row, ticks, cta, dev, table, faqHtml } from '../lib/layout.mjs';

const homeFaqs = [
  ['What is EKIIRA?', 'EKIIRA is a brand and independent software studio (EKIIRA LLP) in Kolkata, India, not an app itself. We build Pinner, FieldScope Pro and ScreenplayX: local-first tools for photographers and filmmakers.'],
  ['Do I need an EKIIRA account or a subscription?', 'No. Our tools are sold individually and designed to work without an account. Each product has its own licence terms, shown on its pricing page. We do not sell a forced bundle.'],
  ['Where is my data stored?', 'On your own devices. Our apps run on your hardware, and we do not collect telemetry or use your work to train AI models. Any optional sync or streaming goes to destinations you choose.'],
  ['Who handles payment and licensing?', 'Secure checkout and global licensing are handled by Dodo Payments, who act as Merchant of Record.'],
];

export const pages = [
  {
    path: '/', title: 'EKIIRA | Professional creative tools you actually own',
    desc: 'Independent, local-first software for photographers and filmmakers: Pinner, FieldScope Pro and ScreenplayX. No forced cloud, no subscription bundles.',
    ogKicker: 'Creative software studio', ogHeadline: 'Professional creative tools you actually own.',
    faqs: homeFaqs, preload: '/img/pinner/pinner-library.webp',
    html: [
      hero({
        eyebrow: 'Independent software studio · Kolkata, India',
        title: 'Creative tools you <em>actually own.</em>',
        lead: 'Pinner, FieldScope Pro and ScreenplayX. Professional software for photographers and filmmakers that runs on your hardware, keeps your work private and is sold one tool at a time.',
        buttons: btn('Explore the tools', '/products/', 'primary') + btn('Why EKIIRA', '#difference'),
        note: 'Local-first · No forced bundles · No telemetry',
        extra: `<div class="stage">${dev('/img/pinner/pinner-library.webp', 'laptop', 'Pinner Studio library view on a desktop display', false)}${dev('/img/fieldscope/06-waveform-scope.webp', 'tablet', 'FieldScope Pro showing a waveform scope on a tablet')}${dev('/img/fieldscope/09-phone-portrait-scopes.webp', 'phone', 'FieldScope Pro scopes in portrait on a phone')}</div>`,
      }),
      sec(head('The ecosystem', 'One studio. Three focused tools.', 'EKIIRA is the studio and brand; each product stands on its own. Buy what you need, skip what you do not.') +
        `<div class="grid c3">${PRODUCTS.map((p) => productCard(p)).join('')}</div>`, '', 'products'),
      sec(head('Principles', 'Built for the people behind the image.', '') +
        cards([
          { icon: 'lock', spec: '01 / Local-first', title: 'Your files stay yours', text: 'Libraries, scripts and footage live on your devices. Nothing is uploaded to an EKIIRA server to make our software work.' },
          { icon: 'tag', spec: '02 / Fair pricing', title: 'Pay for what you use', text: 'Individual licences, free tiers where it makes sense, lifetime options and no mandatory subscription.' },
          { icon: 'cpu', spec: '03 / Hardware honesty', title: 'Runs on what you own', text: 'Phones, tablets and ordinary PCs. No dongles, no proprietary capture boxes, no inflated requirements.' },
          { icon: 'hand', spec: '04 / Indie craft', title: 'Made by people who shoot', text: 'A small team of photographers, filmmakers and developers solving problems we meet on set.' },
        ], 'four'), 'alt', 'principles'),
      sec(head('The EKIIRA difference', 'Software that works for you, not on you.', 'How we approach creative software compared with the usual industry model.', true) +
        `<div class="versus"><div class="card us"><h3>EKIIRA</h3><ul>
<li><strong>Local AI and processing</strong>Culling, scopes and planning happen on your machine.</li>
<li><strong>Individual ownership</strong>Choose a tool, pay for it, keep using it.</li>
<li><strong>Privacy by design</strong>No telemetry. Your work never trains a model.</li>
<li><strong>Works offline</strong>Writing, culling and monitoring do not need a connection.</li></ul></div>
<div class="card them"><h3>The usual model</h3><ul>
<li><strong>Cloud dependency</strong>Features and files tied to someone else's servers.</li>
<li><strong>Forced subscriptions</strong>Rent your tools forever, bundled or not.</li>
<li><strong>Data mining</strong>Your content and behaviour become training data.</li>
<li><strong>Always online</strong>Licence checks and sign-ins get in the way on set.</li></ul></div></div>`, '', 'difference'),
      sec(row(`<p class="eyebrow">Studio</p><h2>Small team. Real sets.</h2><p>EKIIRA combines software engineering with fine-art photography and cinematic storytelling. We build the tools we wanted on shoots, and we say plainly what they can and cannot do.</p>${btn('About the studio', '/about/')}`,
        `<div class="stats"><div><b>Kolkata, India</b><span>Where we design and build</span></div><div><b>3 products</b><span>Pinner, FieldScope Pro, ScreenplayX</span></div><div><b>0 trackers</b><span>No ads or analytics SDKs in our apps</span></div></div>`), 'alt'),
      sec(head('Questions', 'Quick answers', '') + faqHtml(homeFaqs)),
      cta('Find the tool for your next shoot.', 'Browse the products, compare what each does, and start with the one that solves your problem today.', btn('Compare products', '/products/', 'primary') + btn('Read our principles', '/about/')),
    ].join(''),
  },
];
