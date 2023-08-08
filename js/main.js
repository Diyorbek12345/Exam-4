const homeyMenuToggleBtn = document.querySelector(".wrapper button");
const homeMenuDropdown = document.querySelector("#header .dropdown");


homeyMenuToggleBtn.addEventListener("click", () => {
  homeMenuDropdown.classList.toggle("hidden");
});

const TabButtons = document.querySelectorAll(".map__btns a")
const TabContants = document.querySelectorAll(".btn__content")

let active = 0;

function getTabContent() {
  TabContants.forEach((el, i) => {
   if (i !== active) {
    el.style = `
    display: none;
    `
   } else{
    el.style = `
    display: inline-block;
    `
   }
  })
}

getTabContent()

TabButtons.forEach((el, i) => {
  el.addEventListener("click", function () {
    active = i
  })
})