const url =
  "https://jcuervonarvaez.github.io/wdd231/chamber/scripts/business.json";
const cardsGridElement = document.getElementById("business-cards");

function addGridCard(busineess) {
  let cardWrapper = document.createElement("div");
  let cardTitle = document.createElement("h2");
  let cardLogo = document.createElement("img");

  cardTitle.textContent = `${busineess.name}`;
  cardLogo.setAttribute("src", busineess.image);
  cardLogo.setAttribute("alt", `logo of ${busineess.name}`);
  cardLogo.setAttribute("title", `logo of ${busineess.name}`);
  cardLogo.setAttribute("loading", "lazy");
  cardLogo.setAttribute("width", "300");
  cardLogo.setAttribute("heigth", "300");

  cardWrapper.classList.add("card");
  cardWrapper.appendChild(cardLogo);
  cardWrapper.appendChild(cardTitle);

  cardsGridElement.appendChild(cardWrapper);
}

async function getBusiness() {
  try {
    const response = await fetch(url, { method: "get" });
    const data = await response.json();
    displayBusiness(data);
  } catch (error) {
    alert("Error on API Request");
    console.error(error.message);
  }
}

function displayBusiness(data) {
  data.forEach((busineess) => {
    addGridCard(busineess);
  });
}

getBusiness();
