const buttonMenuMobile = document.getElementById("menu-mobile");
const buttonMenuMobileClose = document.getElementById("mobile-close");
const navElement = document.getElementById("navMenu");
const today = new Date();

const currentDateElement = document.getElementById("currentYear");
const lastUpdatedElement = document.getElementById("lastModified");

currentDateElement.innerHTML = today.getFullYear();
lastUpdatedElement.innerHTML = `Last Modification: ${document.lastModified}`;

buttonMenuMobile.addEventListener("click", function () {
  navElement.classList.toggle("active");
});

buttonMenuMobileClose.addEventListener("click", function () {
  navElement.classList.toggle("active");
});
