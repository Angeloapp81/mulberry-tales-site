/* =========================================================
   EDIT ME — this is the only file you need to touch to add,
   remove, or change products shown on the Shop page and the
   Home page's featured strip.

   Each product is one object:
     id          – unique short code, no spaces
     name        – product title
     price       – shown as typed, e.g. "£85" or "From £85"
     image       – path to the photo, relative to the site root
     description – one or two sentences
     etsyUrl     – link to the live Etsy listing (or your shop
                   homepage if the individual listing isn't up yet)
     featured    – true to also show this on the Home page

   To add a new product: copy one whole { ... } block, paste it
   before the closing ]; below, give it a new id, and fill in
   its details. To remove one: delete its whole block.
   ========================================================= */

const PRODUCTS = [
  {
    id: "dodo-rug",
    name: "The Dodo Tapestry Rug",
    price: "Available for pre-order",
    image: "images/product-dodo-rug.jpg",
    description: "Fully hand-embroidered tapestry rug, 3 x 5 feet — a dodo among begonia leaves, on a deep charcoal ground with hand-knotted fringe.",
    etsyUrl: "https://www.etsy.com/shop/YOUR_ETSY_SHOP_NAME",
    featured: true
  },
  {
    id: "sunflower-rug",
    name: "Sunflower Field Tufted Rug",
    price: "Made to order",
    image: "images/product-sunflower-rug.jpg",
    description: "Hand-tufted rug — a mountain sky over a field of sunflowers, with a dog leaping after a butterfly. Custom colourways available.",
    etsyUrl: "https://www.etsy.com/shop/YOUR_ETSY_SHOP_NAME",
    featured: true
  },
  {
    id: "tiger-tapestry",
    name: "Tiger Wall Tapestry",
    price: "Made to order",
    image: "images/product-tiger-tapestry.jpg",
    description: "Digitally printed and hand-embroidered wall hanging, 3 x 5 feet, on a botanical pomegranate-and-floral ground with tasselled hem.",
    etsyUrl: "https://www.etsy.com/shop/YOUR_ETSY_SHOP_NAME",
    featured: true
  },
  {
    id: "floral-throw",
    name: "Hand-Tufted Floral Throw",
    price: "Made to order",
    image: "images/product-floral-throw.jpg",
    description: "A raised-floral hand-tufted throw with fringed edges — brings warmth and texture to a sofa or daybed.",
    etsyUrl: "https://www.etsy.com/shop/YOUR_ETSY_SHOP_NAME",
    featured: true
  },
  {
    id: "parrot-napkin",
    name: "Yellow Ringneck Table Napkin",
    price: "Sold as a set",
    image: "images/product-parrot-napkin.jpg",
    description: "Centre table napkin, hand-painted and hand-embroidered with a Yellow Indian Ringneck parrot.",
    etsyUrl: "https://www.etsy.com/shop/YOUR_ETSY_SHOP_NAME",
    featured: false
  },
  {
    id: "deer-napkin",
    name: "Winter Stag Napkin",
    price: "Sold as a set",
    image: "images/product-deer-napkin.jpg",
    description: "Deep red linen napkin with a hand-embroidered stag, finished with a hand-stitched hem — a festive table staple.",
    etsyUrl: "https://www.etsy.com/shop/YOUR_ETSY_SHOP_NAME",
    featured: false
  },
  {
    id: "fern-napkin",
    name: "Fern Cutlery-Pocket Napkin",
    price: "Sold as a set",
    image: "images/product-fern-napkin.jpg",
    description: "Chambray napkin with an embroidered fern sprig and a built-in cutlery pocket, finished with a scalloped edge.",
    etsyUrl: "https://www.etsy.com/shop/YOUR_ETSY_SHOP_NAME",
    featured: false
  },
  {
    id: "sicilian-lemon-set",
    name: "Sicilian Lemon Gift Set",
    price: "Seasonal gift set",
    image: "images/product-sicilian-lemon-set.jpg",
    description: "A majolica-inspired lemon-and-tile print gift set, packed in a lined wicker hamper — the perfect handmade gift.",
    etsyUrl: "https://www.etsy.com/shop/YOUR_ETSY_SHOP_NAME",
    featured: true
  },
  {
    id: "girl-napkin",
    name: "Bonnet & Bouquet Napkin",
    price: "Sold as a set",
    image: "images/product-girl-napkin.jpg",
    description: "A delicate hand-embroidered napkin featuring a girl in a sun hat carrying a bouquet, edged with a hand-stitched border.",
    etsyUrl: "https://www.etsy.com/shop/YOUR_ETSY_SHOP_NAME",
    featured: false
  }
];
