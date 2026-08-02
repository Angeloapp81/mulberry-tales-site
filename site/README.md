# Mulberry Tales website

## What's in here
- `index.html`, `shop.html`, `about.html`, `contact.html` — the four pages
- `css/style.css` — all colours, fonts and layout in one file
- `js/products.js` — **edit this to add/remove/change products** (no HTML editing needed)
- `js/render-products.js` — turns products.js into the cards you see; you shouldn't need to touch this
- `images/` — the photos, cropped from the Instagram posts and the logo pack

## Before you publish, replace these placeholders
Search each HTML file (and `products.js`) for:
- `YOUR_ETSY_SHOP_NAME` — your real Etsy shop slug
- `YOUR_FORMSPREE_ID` (in `contact.html`) — see the comment in that file
- `YOUR_EMAIL@example.com` (in `contact.html`)

## Editing content later
- **Add/change a product**: open `js/products.js`, copy one `{ ... }` block, edit the fields, save. It appears automatically on Shop, and on Home if `featured: true`.
- **Swap a photo**: drop a new file into `images/`, then update the `image:` path for that product in `products.js`.
- **Change any text**: open the relevant `.html` file — the copy is plain text inside the page, no build step required.

## Hosting on GitHub Pages with your domain
1. Create the repo under **your own** GitHub account (not a collaborator's), so you keep ownership.
2. Push everything in this folder to the repo root.
3. Repo Settings → Pages → set source to your main branch.
4. In the same Settings → Pages screen, type your domain into "Custom domain" — GitHub creates a `CNAME` file for you automatically.
5. At your domain registrar, add:
   - Four **A records** (apex domain) → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (verify current IPs against GitHub's own Pages docs)
   - A **CNAME record** for `www` → `yourusername.github.io`
6. Once DNS propagates, tick "Enforce HTTPS" in Pages settings.
