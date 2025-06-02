// Copyright and date information
async function displayCopyright() {
  const today = new Date();
  const currentDateElement = document.getElementById("currentYear");
  const lastUpdatedElement = document.getElementById("lastModified");

  currentDateElement.innerHTML = today.getFullYear();
  lastUpdatedElement.innerHTML = `Last Modification: ${document.lastModified}`;
}

// Navigation menu toggle for mobile view
function toggleMenu(button) {
  const isExpanded = button.getAttribute("aria-expanded") === "true";
  // Button
  button.textContent = isExpanded ? "☰" : "✖";
  button.setAttribute("aria-expanded", !isExpanded);
  button.classList.toggle("close", !isExpanded);
  // Content Menu
  const mainMenu = document.getElementById("main-menu");
  mainMenu.setAttribute("aria-hidden", isExpanded);
  mainMenu.classList.toggle("open", !isExpanded);
}

document.addEventListener("DOMContentLoaded", () => {
  const btnMobile = document.getElementById("btn-menu-mobile");
  btnMobile.addEventListener("click", () => {
    toggleMenu(btnMobile);
  });
  displayCopyright();
});
