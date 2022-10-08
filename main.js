const menuToggle = document.querySelector(".menuToggle")
const navMenu = document.querySelector(".navMenu")
const gridContainer = document.querySelector(".gridContainer")
const html = document.querySelector("html")
menuToggle.addEventListener("click", () =>{
  navMenu.classList.toggle("navMenu_visible")
  gridContainer.classList.toggle("noScrollBody")
  html.classList.toggle("noScrollHtml")
})