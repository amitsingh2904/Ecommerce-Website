const fs = require("fs");

const brands = ["FashionCo", "UrbanWear", "StreetStyle", "CasualHub", "Trendz"];
const categories = ["tshirts"];
let products = [];

for (let i = 1; i <= 100; i++) {
  const product = {
    id: i,
    title: `T-Shirt ${i}`,
    brand: brands[Math.floor(Math.random() * brands.length)],
    category: "tshirts",
    price: Math.floor(Math.random() * 50) + 10, // $10–$60
    rating: (Math.random() * (5 - 1) + 1).toFixed(1), // random rating 1.0 – 5.0
    thumbnail: `https://via.placeholder.com/300x400.png?text=T-Shirt+${i}`
  };
  products.push(product);
}

// Save into /public/data.json
fs.writeFileSync("public/data.json", JSON.stringify({ products }, null, 2));
console.log("✅ data.json created with 100 products (including rating)");
