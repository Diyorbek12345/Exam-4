const productcards = document.querySelectorAll(".cards");
// console.log(productCard);
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
  `

  productCardBody.appendChild(productImg);

  const productCardFooter = document.createElement("div");
  productCardFooter.className = "product-card-footer";

  const productTitle = document.createElement("h3");
  const productTitleText = document.createTextNode(product.name);

  productTitle.appendChild(productTitleText);

  const productName = document.createElement("p");
  productName.innerHTML =  `${product.name}`;

  const productPrice = document.createElement("p");
  productPrice.innerHTML = `${product.price}`;
  productPrice.className = "cards_current__cost";
  productPrice.style = `
  margin-bottom: 10px;
  `

  const productBtn = document.createElement("a");
  productBtn.innerHTML = "В корзину";
  productBtn.className = "cards_btn"

  productCardFooter.prepend(productBtn);
  productCardFooter.prepend(productPrice);
  productCardFooter.prepend(productTitle);

  productCard.append(productCardBody, productCardFooter);
  console.log(productCard);
  return productCard;
}

products.slice(3, 7).map((product) => {
  let card = getProductCard(product);
  let card__copy1 = card.cloneNode(true);
  let card__copy2 = card.cloneNode(true);
  let card__copy3 = card.cloneNode(true);
  productcards[0].append(card__copy1);
  productcards[1].append(card__copy2);
  productcards[2].append(card__copy3);
});



let articles = [
  {
    title: "qalesiz",
    description: "oka nima gap",
    image: "../assets/images/articles/1.png"
  },
  {
    title: "qalesiz",
    description: "oka nima gap",
    image: "../assets/images/articles/2.png"
  },
  {
    title: "qalesiz",
    description: "oka nima gap",
    image: "../assets/images/articles/3.png"
  }
]