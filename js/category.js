const category = new URLSearchParams(location.search).get("category");

let categoryProducts = products.filter((pr) => pr.category == category);

console.log(categoryProducts);

const productcardS = document.querySelector(".category__products")

function getProductCard(product) {
  const productCard = document.createElement("div");
  productCard.className = "product-card";

  const productCardBody = document.createElement("div");
  productCardBody.className = "product-card-body";

  const productImg = document.createElement("img");
  productImg.src = product.images[0];
  productImg.alt = product.name;
  productImg.className = "card1__img";
  productImg.style = `
  margin-bottom: 20px;
  `;

  productCardBody.appendChild(productImg);

  const productCardFooter = document.createElement("div");
  productCardFooter.className = "product-card-footer";

  const productTitle = document.createElement("h3");
  const productTitleText = document.createTextNode(product.name);

  productTitle.appendChild(productTitleText);

  const productName = document.createElement("p");
  productName.innerHTML = `${product.name}`;

  const productPrice = document.createElement("p");
  productPrice.innerHTML = `${product.price}`;
  productPrice.className = "cards_current__cost";
  productPrice.style = `
  margin-bottom: 10px;
  `;

  const productBtn = document.createElement("a");
  productBtn.innerHTML = "В корзину";
  productBtn.className = "cards_btn";
  productBtn.href =   `категоря.html?category=${product.category}`
  console.log(product.category);

  productCardFooter.prepend(productBtn);
  productCardFooter.prepend(productPrice);
  productCardFooter.prepend(productTitle);

  productCard.append(productCardBody, productCardFooter);
  // console.log(productCard);
  return productCard;
}

categoryProducts.map((product) => {
  let card = getProductCard(product);

  productcardS.append(card);
});