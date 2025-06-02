import { getBusinessCard, fetchBusiness } from "./business.mjs";

/** Business Directory Script
 * This script fetches business data from a JSON file and displays it in two formats:
 * 1. A grid of business cards
 * 2. A list of businesses in a table format.
 * It allows users to toggle between the two views using buttons.
 */

// Buttons
const buttonGrid = document.getElementById("button-view-grid");
const buttonList = document.getElementById("button-view-list");

// Containers
const cardsGridElement = document.getElementById("business-cards");
const listElement = document.getElementById("business-list");
const listTable = listElement.querySelector("tbody");

buttonGrid.addEventListener("click", () => {
  listElement.style.display = "none";
  cardsGridElement.style.display = "grid";
});

buttonList.addEventListener("click", () => {
  listElement.style.display = "flex";
  cardsGridElement.style.display = "none";
});

/**
 * Creates a table row for a business in the list view.
 * @param {Object} business - The business object containing details.
 * @return {Promise<Element>} - A DOM element representing the business row in the table.
 */
async function createBusinessRow(business) {
  let businessRowElement = document.createElement("tr");
  let name = document.createElement("td");
  let membership = document.createElement("td");
  let address = document.createElement("td");
  let website = document.createElement("td");
  let memberType = "";
  switch (business.membership_level) {
    case "1":
      memberType = "Member";
      break;
    case "2":
      memberType = "Silver";
      break;
    case "3":
      memberType = "Gold";
      break;
  }
  name.textContent = business.name;
  membership.textContent = memberType;
  address.innerHTML = `${business.address} <br> ${business.phone}`;
  website.textContent = business.website;

  businessRowElement.appendChild(name);
  businessRowElement.appendChild(membership);
  businessRowElement.appendChild(address);
  businessRowElement.appendChild(website);

  return businessRowElement;
}

/**
 * Retrieves business data from the API and populates the business cards and list.
 * @returns {Promise<void>}
 */
async function getBusiness() {
  const business = await fetchBusiness();

  if (business.length > 0) {
    // Clear existing Skeletons
    cardsGridElement.innerHTML = "";
    
    business.forEach(async (business) => {
      let card = await getBusinessCard(business);
      let tableRow = await createBusinessRow(business);
      console.log("Business Card: ", card);
      cardsGridElement.appendChild(card);
      listTable.appendChild(tableRow);
    });
  }
}

// Initialize the business directory by fetching and displaying the business data
document.addEventListener("DOMContentLoaded", async () => {
  await getBusiness();
});
