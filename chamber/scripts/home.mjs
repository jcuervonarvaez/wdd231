import { getBusinessCard, getRandomVIPBusiness } from "./business.mjs";

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
  const businessCardsContiner = document.getElementById("business-cards");
  await getSpotlightBusinessHTML(businessCardsContiner);
});
