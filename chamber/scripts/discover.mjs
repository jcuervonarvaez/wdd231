const LAST_VISIT_KEY = 'lastVisitDate';

async function fetchPlaces() {
  try {
    const response = await fetch("./scripts/places.json");
    const places = await response.json();
    return places;
  } catch (error) {
    console.error("Error fetching places:", error);
    return [];
  }
}

function createCardImage(photo_sources, name) {
  const pictureElement = document.createElement("picture");
  const imgElement = document.createElement("img");
  // Mobile-first approach: use the first photo source as the main image
  imgElement.src = photo_sources[0];
  imgElement.alt = name;
  imgElement.loading = "lazy";
  imgElement.width = "800";
  imgElement.height = "640";
  // Tablet Size
  const sourceTablet = document.createElement("source");
  sourceTablet.media = "(min-width: 600px)";
  sourceTablet.srcset = photo_sources[1];
  // Desktop Size
  const sourceDesktop = document.createElement("source");
  sourceDesktop.media = "(min-width: 900px)";
  sourceDesktop.srcset = photo_sources[2];
  // Add sources to the picture element
  pictureElement.appendChild(sourceTablet);
  pictureElement.appendChild(sourceDesktop);
  pictureElement.appendChild(imgElement);

  return pictureElement;
}

function createCard(place) {
  const cardElement = document.createElement("article");
  cardElement.classList.add("card-place");

  let titleElement = document.createElement("h2");
  titleElement.textContent = place.name;

  let descriptionElement = document.createElement("p");
  descriptionElement.textContent = place.description;

  let addressElement = document.createElement("p");
  addressElement.textContent = place.address;
  addressElement.classList.add("card-place-address");

  let costElement = document.createElement("p");
  costElement.textContent = place.cost;
  costElement.classList.add("card-place-cost");

  let imageElement = createCardImage(place.photo_sources, place.name);

  let linkElement = document.createElement("a");
  linkElement.classList.add("card-place-link");
  linkElement.href = place.url;
  linkElement.textContent = "Learn more";
  linkElement.target = "_blank";
  linkElement.rel = "noopener noreferrer";

  // Append elements to the card
  cardElement.appendChild(imageElement);
  cardElement.appendChild(titleElement);
  cardElement.appendChild(descriptionElement);
  cardElement.appendChild(addressElement);
  cardElement.appendChild(costElement);
  cardElement.appendChild(linkElement);
  return cardElement;
}

function getLastVisit() {
  const storedDate = localStorage.getItem(LAST_VISIT_KEY);
  return storedDate ? new Date(storedDate) : null;
}

function saveCurrentVisit() {
  const now = new Date();
  localStorage.setItem(LAST_VISIT_KEY, now.toISOString());
}

function calculateDaysDifference(lastDate, currentDate) {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const timeDiff = currentDate - lastDate;
  return Math.floor(timeDiff / millisecondsPerDay);
}

function generateVisitMessage(lastVisit) {
  if (!lastVisit) {
    return 'Welcome! Let us know if you have any questions.';
  }

  const now = new Date();
  const diffDays = calculateDaysDifference(lastVisit, now);

  if (diffDays < 1) {
    return 'Back so soon! Awesome!';
  } else if (diffDays === 1) {
    return 'You last visited 1 day ago.';
  } else {
    return `You last visited ${diffDays} days ago.`;
  }
}

function displayMessage(message) {
  const container = document.getElementById('visit-message');
  if (container) {
    container.textContent = message;
  }
}

function handleVisitTracking() {
  const lastVisit = getLastVisit();
  const message = generateVisitMessage(lastVisit);
  displayMessage(message);
  saveCurrentVisit();
}

document.addEventListener("DOMContentLoaded", async () => {
  handleVisitTracking();
  const cardsContainer = document.getElementById("places-container-cards");
  const places = await fetchPlaces();
  cardsContainer.innerHTML = ""; // Clear existing content
  places.forEach((place) => {
    const card = createCard(place);
    cardsContainer.appendChild(card);
  });
});
