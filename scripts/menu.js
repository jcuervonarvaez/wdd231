const buttonMenu = document.getElementById("menu-button");
const navElement = document.getElementById("menu");

buttonMenu.addEventListener("click", function () {
  navElement.classList.toggle("hidden-mobile");
});
