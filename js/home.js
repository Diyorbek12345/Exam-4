const homeyMenuToggleBtn = document.querySelector(".wrapper button");
const homeMenuDropdown = document.querySelector("#header .dropdown");


homeyMenuToggleBtn.addEventListener("click", () => {
  homeMenuDropdown.classList.toggle("hidden");
});