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
    TrendingDiv.innerHTML = `      
        <div class="card bg-base-100 w-96 shadow-md">
        <figure class="md:w-full bg-slate-200 py-5 h-72 overflow-hidden flex justify-center items-center">
          <img
          class="max-h-full max-w-full object-contain"
            src=${product.image}
            alt="Shoes"
          />
        </figure>
        <div class="p-3">
          <div class="flex justify-between">
            <h2 class="text-indigo-600 bg-slate-200 rounded-full px-2 font-bold">${product.category}</h2>
            <p><i class="fa-solid text-yellow-500 fa-star"></i> ${product.rating.rate} (${product.rating.count})</p>
          </div>
          <p class="my-3 truncate font-bold">
            ${product.description}
          </p>
          <p class="font-bold mb-5">$${product.price}</p>
          <div class="flex justify-between">
            <button class="btn w-2/5"><i class="fa-regular fa-eye"></i> Details</button>
            <button class="btn btn-primary w-2/5"><i class="fa-solid fa-cart-shopping"></i> Add</button>
          </div>
        </div>
      </div>`;
    TrendingItems.appendChild(TrendingDiv);
  });
};

loadProducts();
