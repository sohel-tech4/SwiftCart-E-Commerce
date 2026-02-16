const loadProducts = () => {
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((products) => TrndingProducts(products));
};

// {
//     "id": 11,
//     "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//     "price": 109,
//     "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
//     "rating": {
//         "rate": 4.8,
//         "count": 319
//     }
// }

const TrndingProducts = (products) => {
  const TopProducts = products
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 3);

  const TrendingItems = document.getElementById("Trending-Items");
  TrendingItems.innerHTML = "";

  TopProducts.map((product) => {
    const TrendingDiv = document.createElement("div");
    TrendingDiv.innerHTML = `<div>
                <h3>${product.title}</h3>
                <p>Rating: ${product.rating.rate}</p>
            </div>`;
    TrendingItems.appendChild(TrendingDiv);
  });
};

loadProducts();
