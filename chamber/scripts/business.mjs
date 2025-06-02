// URL to fetch business data
export async function fetchBusiness() {
  const url =
    "https://jcuervonarvaez.github.io/wdd231/chamber/scripts/members.json";
  try {
    const response = await fetch(url, { method: "get" });
    const business = await response.json();
    return business;
  } catch (error) {
    alert("Error on API Request");
    console.error(error.message);
    return [];
  }
}

/**
 * Fetches a random selection of VIP businesses (membership levels 2 and 3).
 * @param {number} limit - The maximum number of businesses to return.
 * @return {Promise<Array>} - A promise that resolves to an array of random VIP businesses.
 */

export async function getRandomVIPBusiness(limit = 3) {
  const businesses = await fetchBusiness();
  if (businesses.length === 0) {
    return [];
  }
  const vipBusinesses = businesses.filter((business) =>
    ["2", "3"].includes(business.membership_level)
  );
  const shuffled = vipBusinesses.sort(() => 0.5 - Math.random());
  // Limit the number of businesses to the specified limit
  if (shuffled.length <= limit) {
    return shuffled;
  }
  const randomThree = shuffled.slice(0, limit);
  return randomThree;
}

/**
 * Generates a business card for the given business.
 * @param {Object} business - The business object containing details like name, address, and contact information.
 * @return {Promise<Element>} - A DOM element representing the business card.
 */
export async function getBusinessCard(business) {
  let businessCardElement = document.createElement("div");
  businessCardElement.classList.add("business-card");

  if (business.membership_level) {
    let head = await getHeaderBusinessCard(business.membership_level);
    businessCardElement.appendChild(head);
  }
  let body = await getBodyBusinessCard(
    business.image,
    business.name,
    business.category,
    business.address,
    business.phone
  );
  let footer = await getFooterBusinessCard(business.website);
  businessCardElement.appendChild(body);
  businessCardElement.appendChild(footer);
  return businessCardElement;
}

/**
 * Generates a header for the business card based on the membership level.
 * @param {string} membership_level - The membership level of the business (1, 2, or 3).
 * @return {Promise<Element>} - A DOM element representing the header of the business card.
 */
async function getHeaderBusinessCard(membership_level) {
  let businessCardHeadElement = document.createElement("div");
  let businessCardTagElement = document.createElement("div");
  let businessCardTagSpanElement = document.createElement("span");
  switch (membership_level) {
    case "1":
      businessCardTagSpanElement.textContent = "Member";
      businessCardTagElement.classList.add("business-card-tag-member");
      break;
    case "2":
      businessCardTagSpanElement.textContent = "Silver";
      businessCardTagElement.classList.add("business-card-tag-silver");
      break;
    case "3":
      businessCardTagSpanElement.textContent = "Gold";
      businessCardTagElement.classList.add("business-card-tag-gold");
      break;
  }

  businessCardTagElement.appendChild(businessCardTagSpanElement);
  businessCardTagElement.classList.add("business-card-tag");
  businessCardHeadElement.appendChild(businessCardTagElement);
  businessCardHeadElement.classList.add("business-card-head");

  return businessCardHeadElement;
}

/**
 * Generates the body of the business card with the business details.
 * @param {string} image - The URL of the business logo.
 * @param {string} name - The name of the business.
 * @param {string} category - The category of the business.
 * @param {string} address - The address of the business.
 * @param {string} phone - The phone number of the business.
 * @return {Promise<Element>} - A DOM element representing the body of the business card.
 */
async function getBodyBusinessCard(image, name, category, address, phone) {
  let businessCardBodyElement = document.createElement("div");
  let businessCardProfileElement = document.createElement("div");
  let businessCardProfileImgElement = document.createElement("img");
  let businessCardProfileH2Element = document.createElement("h2");
  let businessCardProfilePElement = document.createElement("p");
  let businessCardContactInfoElement = document.createElement("div");
  let businessCardContactInfoUlElement = document.createElement("ul");
  let addressElement = document.createElement("li");
  let phoneElement = document.createElement("li");

  businessCardProfileH2Element.textContent = name;
  businessCardProfilePElement.textContent = category;
  businessCardProfileImgElement.setAttribute("src", image);
  businessCardProfileImgElement.setAttribute("loading", "lazy");
  businessCardProfileImgElement.setAttribute("alt", `Logo of ${name}`);
  businessCardProfileImgElement.setAttribute("title", `Logo of ${name}`);
  addressElement.textContent = address;
  phoneElement.textContent = phone;

  businessCardProfileElement.appendChild(businessCardProfileImgElement);
  businessCardProfileElement.appendChild(businessCardProfileH2Element);
  businessCardProfileElement.appendChild(businessCardProfilePElement);
  businessCardContactInfoUlElement.appendChild(addressElement);
  businessCardContactInfoUlElement.appendChild(phoneElement);
  businessCardContactInfoElement.appendChild(businessCardContactInfoUlElement);

  businessCardBodyElement.classList.add("business-card-body");
  businessCardProfileElement.classList.add("business-card-profile");
  businessCardContactInfoElement.classList.add("business-card-contact-info");
  businessCardBodyElement.appendChild(businessCardProfileElement);
  businessCardBodyElement.appendChild(businessCardContactInfoElement);

  return businessCardBodyElement;
}

/**
 * Generates the footer of the business card with a link to the business website.
 * @param {string} website - The URL of the business website.
 * @return {Promise<Element>} - A DOM element representing the footer of the business card.
 */
async function getFooterBusinessCard(website) {
  let businessCardFooterElement = document.createElement("div");
  let businessCardFooterAElement = document.createElement("a");

  businessCardFooterAElement.setAttribute("href", website);
  businessCardFooterAElement.setAttribute("target", "_blank");
  businessCardFooterAElement.textContent = "Visit Website 🌐";

  businessCardFooterElement.classList.add("business-card-footer");
  businessCardFooterElement.appendChild(businessCardFooterAElement);

  return businessCardFooterElement;
}
