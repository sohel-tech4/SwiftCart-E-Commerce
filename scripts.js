const loadProducts = () => {
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((products) => TrndingProducts(products)
  );
};

const loadCategories = () => {
  const url = "https://fakestoreapi.com/products/categories";
  fetch(url)
    .then((res) => res.json())
    .then((categories) => ShowCaterogries(categories));
};


const ClickCatergory = (category) =>{
   const url = `https://fakestoreapi.com/products/category/${category}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => AllProducts(data));
}

const AllPrdouctsData = () => {
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((products) => AllProducts(products)
  );
};


const ShowCaterogries = (categories) =>{
  const CategoriesItem = document.getElementById("Categories-Item")
  CategoriesItem.innerHTML = ""

  categories.map((catergory) => {
    const CategoriesDiv = document.createElement("div")
    CategoriesDiv.innerHTML = `<button onClick="ClickCatergory('${catergory.replace(/'/g,"\\'")}')" class="px-5 py-1 product-btn rounded-lg border-1 hover:bg-indigo-600 hover:text-white font-semibold">${catergory}</button>
`
    CategoriesItem.appendChild(CategoriesDiv)

  })

}

const AllProducts = (products) => {

  const AllProducts = document.getElementById("All-Products");
  AllProducts.innerHTML = "";

  products.map((product) => {
    const ProductsDiv = document.createElement("div");
    ProductsDiv.innerHTML = `      
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
            <button onclick="my_modal_5.showModal()" class="btn w-2/5"><i class="fa-regular fa-eye"></i> Details</button>
            <button class="btn btn-primary w-2/5"><i class="fa-solid fa-cart-shopping"></i> Add</button>
          </div>
        </div>
      </div>`;
    AllProducts.appendChild(ProductsDiv);
  });
};

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
            <button onclick="my_modal_5.showModal()" class="btn w-2/5"><i class="fa-regular fa-eye"></i> Details</button>
            <button class="btn btn-primary w-2/5"><i class="fa-solid fa-cart-shopping"></i> Add</button>
          </div>
        </div>
      </div>`;
    TrendingItems.appendChild(TrendingDiv);
  });
};



loadProducts();
loadCategories()
AllPrdouctsData()
