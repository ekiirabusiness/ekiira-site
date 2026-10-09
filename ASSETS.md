# Replacing website assets

All website artwork is stored under `assets/` or beside the relevant product website so logos and images can be replaced without changing page layout. Keep the existing filenames, or update the corresponding `<img>` / metadata path in the HTML if you rename a file.

`FieldScope Pro` is a working product name in the supplied brief; update its name consistently in the product page and product navigation/card if it changes.

Support email and registered office details were not supplied. Replace the footer's "Support details coming soon" text and add the confirmed registered-office address when those details are available; do not publish invented company information.

## Product sites

The EKIIRA home page links to three standalone product sites:

- `products/pinner/` is a copy of the already-built Pinner website from `existing pinner web-site/`. That original folder remains unchanged. The copied Pinner headers link back to `../../index.html`; its published canonical still points to the existing Pinner URL.
- `products/fieldscope-pro/` contains the dedicated FieldScope Pro overview, monitor features, camera, setup/compatibility, pricing, privacy and FAQ pages.
- `products/screenplayx/` contains the dedicated ScreenplayX overview, features, workflow, privacy, pricing, FAQ and support pages.

The product-site CSS and responsive navigation script are shared at `products/assets/`. Screenshots or product names can be replaced in the individual site's HTML and asset folder; the generated ScreenplayX SVGs are clearly labelled as illustrations rather than application screenshots.

| Asset | Purpose |
| --- | --- |
| `assets/brand/ekiira-mark.svg` | EKIIRA logo mark used in the header and favicon |
| `assets/brand/ekiira-social.svg` | Social sharing image |
| `assets/products/pinner-mark.svg` | Pinner card and navigation mark |
| `assets/products/fieldscope-mark.svg` | FieldScope Pro card and navigation mark |
| `assets/products/screenplayx-mark.svg` | ScreenplayX card and navigation mark |
| `assets/products/pinner-library.webp` | Pinner Studio product image |
| `assets/products/fieldscope-monitor.png` | FieldScope Pro monitor image |
| `assets/products/fieldscope-false-color.png` | FieldScope Pro false-colour image |
| `assets/products/screenplayx-workflow.svg` | ScreenplayX workflow illustration (not a product screenshot) |
| `assets/products/screenplayx-scene-board.svg` | ScreenplayX scene/beat-board illustration (not a product screenshot) |
| `assets/products/screenplayx-stripboard.svg` | ScreenplayX schedule illustration (not a product screenshot) |
| `products/fieldscope-pro/assets/screenshots/` | FieldScope Pro app captures supplied with the brief |

For replacement product images, retain the current image's aspect ratio or adjust its `width`, `height`, and `alt` text in the relevant page.
