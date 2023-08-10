const productsRow = document.querySelector(".product-row");
productsRow.style = `
  dispaly: grid;
  grid-template-columns: repet(3, 1fr)
`

function GetProductsCard(product) {
  const productCard = document.createElement("div");
  productCard.className = "product-card";


  const productCardBody = document.createElement("div");
  productCardBody.className = "product-card-body";

  const productImg = document.createElement("img");
  productImg.src = product.images[0];
  productImg.alt = product.name;

  productCardBody.appendChild(productImg);

  const productCardFooter = document.createElement("div");
  productCardFooter.className = "product-card-footer";

  const productTitle = document.createElement("h3");
  const productTitleText = document.createTextNode(product.name);
  productTitle.style = `
  margin-top: 10px;
  `

  productTitle.appendChild(productTitleText);

  const productPrice = document.createElement("p");
  productPrice.innerHTML = `<i> ${product.price} $</i>`;
  productPrice.style = `
  margin-bottom: 10px;
  margin-top: 10px;
  `

  const productBtn = document.createElement("button");
  productBtn.className = "button";
  productBtn.innerHTML = "В карзину";
  productBtn.style = `
  padding: 10px 40px;
  background-color: white;
  color: #70C05B;
  border: 2px solid #70C05B;
  margin-bottom: 20px;
  `

  productCardFooter.prepend(productBtn);
  productCardFooter.prepend(productPrice);
  productCardFooter.prepend(productTitle);

  productCard.append(productCardBody, productCardFooter);

  return productCard;
}

products.map((product) => {
  let card = GetProductsCard(product);
  productsRow.append(card);
});


const searchInput = document.querySelector(".search__input")

let search = "";

function getProductCard(pr) {
  
  return `
  <div class="product-card">
  <div class=""product-card-body>
  <img
  src="${pr.images[0]}"
  alt="${pr.name}"
  />
  </div>
  <div class="product-card-footer">
  <h3><a href="product.html">${pr.name}</a></h3>
  <p><i> ${pr.price} </i></p>
  <button>В карзину</button>
  </div>
  </div>
  `
}

const TotalProducts = document.querySelector(".products__count")


function getProducts() {
  let result = products.filter((pr) => pr.name.toLowerCase().includes(search));

  TotalProducts.textContent = result.length;
  productsRow.innerHTML = "";
  result.map((pr) => {
  productsRow.innerHTML += getProductCard(pr)
});
};

getProducts()

searchInput.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase()
  getProducts()

})
