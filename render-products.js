/* Renders PRODUCTS (see products.js) into any element with
   id="product-grid" (shows everything) or id="featured-grid"
   (shows only items with featured: true). No need to edit this
   file — add products in products.js instead. */

function renderProductCard(p) {
  return `
    <a class="piece-card" href="${p.etsyUrl}" target="_blank" rel="noopener">
      <div class="photo">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="info">
        <h3>${p.name}</h3>
        <p class="price">${p.price}</p>
        <p class="desc">${p.description}</p>
      </div>
    </a>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const full = document.getElementById("product-grid");
  if (full) {
    full.innerHTML = PRODUCTS.map(renderProductCard).join("");
  }

  const featured = document.getElementById("featured-grid");
  if (featured) {
    const items = PRODUCTS.filter(p => p.featured).slice(0, 4);
    featured.innerHTML = items.map(renderProductCard).join("");
  }
});
