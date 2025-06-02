import { getBusinessCard, getRandomVIPBusiness } from "./business.mjs";
import { displayWeather, displayForecast } from "./weather.mjs";

async function getSpotlightBusinessHTML(parentElement) {
  const randomBusiness = await getRandomVIPBusiness(3);
  // Clear existing Skeletons
  if (randomBusiness.length > 0) {
    parentElement.innerHTML = "";
    randomBusiness.forEach(async (business) => {
      let card = await getBusinessCard(business);
      parentElement.appendChild(card);
    });
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const weatherElement = document.getElementById("weather-info-list");
  const forecastElement = document.getElementById("forecast-info-list");

  displayWeather(weatherElement);
  displayForecast(forecastElement);

  const businessCardsContiner = document.getElementById("business-cards");
  await getSpotlightBusinessHTML(businessCardsContiner);
});
