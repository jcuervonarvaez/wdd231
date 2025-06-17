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

async function displayCopyright() {
    const today = new Date();
    const currentDateElement = document.getElementById("currentYear");
    const lastUpdatedElement = document.getElementById("lastModified");

    currentDateElement.innerHTML = today.getFullYear();
    lastUpdatedElement.innerHTML = `Last Modification: ${document.lastModified}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const btnMobile = document.getElementById("btn-menu-mobile");
    btnMobile.addEventListener("click", () => {
        toggleMenu(btnMobile);
    });
    displayCopyright();
});


/* JavaScript para el acordeón (puede ir en un archivo separado) */
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentNode;
    const answer = button.nextElementSibling;
    
    button.classList.toggle('active');
    answer.classList.toggle('show');
    
    // Cerrar otros items abiertos
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.querySelector('.faq-question').classList.remove('active');
        item.querySelector('.faq-answer').classList.remove('show');
      }
    });
  });
});