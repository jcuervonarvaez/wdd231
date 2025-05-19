const url =
  "https://jcuervonarvaez.github.io/wdd231/chamber/scripts/members.json";
const cardsGridElement = document.getElementById("business-cards");

async function getBusiness() {
  try {
    const response = await fetch(url, { method: "get" });
    const business = await response.json();
    business.forEach((business) => {
      let card = createBusinessCard(business);
      cardsGridElement.appendChild(card);
    });
  } catch (error) {
    alert("Error on API Request");
    console.error(error.message);
  }
}

function createBusinessCard(business) {
  let businessCardElement = document.createElement("div");
  businessCardElement.classList.add("business-card");

  let businessCardHeadElement = document.createElement("div");
  businessCardHeadElement.classList.add("business-card-head");

  if (business.membership_level) {
    let businessCardTagElement = document.createElement("div");
    let businessCardTagSpanElement = document.createElement("span");
    switch (business.membership_level) {
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
    businessCardTagElement.classList.add("business-card-tag");
    businessCardTagElement.appendChild(businessCardTagSpanElement);
    businessCardHeadElement.appendChild(businessCardTagElement);
    businessCardElement.appendChild(businessCardHeadElement);
  }

  let businessCardBodyElement = document.createElement("div");
  businessCardBodyElement.classList.add("business-card-body");

  let businessCardProfileElement = document.createElement("div");
  businessCardProfileElement.classList.add("business-card-profile");

  let businessCardProfileImgElement = document.createElement("img");
  businessCardProfileImgElement.setAttribute("src", business.image);
  businessCardProfileImgElement.setAttribute("alt", `Logo of ${business.name}`);
  businessCardProfileImgElement.setAttribute(
    "title",
    `Logo of ${business.name}`
  );
  businessCardProfileElement.appendChild(businessCardProfileImgElement);

  let businessCardProfileH2Element = document.createElement("h2");
  businessCardProfileH2Element.textContent = business.name;
  businessCardProfileElement.appendChild(businessCardProfileH2Element);

  let businessCardProfilePElement = document.createElement("p");
  businessCardProfilePElement.textContent = business.category;
  businessCardProfileElement.appendChild(businessCardProfilePElement);

  let businessCardContactInfoElement = document.createElement("div");
  businessCardContactInfoElement.classList.add("business-card-contact-info");

  let businessCardContactInfoUlElement = document.createElement("ul");

  let address = document.createElement("li");
  address.textContent = business.address;
  businessCardContactInfoUlElement.appendChild(address);
  
  let phone = document.createElement("li");
  phone.textContent = business.phone;
  businessCardContactInfoUlElement.appendChild(phone);

  businessCardContactInfoElement.appendChild(businessCardContactInfoUlElement);

  businessCardBodyElement.appendChild(businessCardProfileElement);
  businessCardBodyElement.appendChild(businessCardContactInfoElement);
  businessCardElement.appendChild(businessCardBodyElement);

  let businessCardFooterElement = document.createElement("div");
  businessCardFooterElement.classList.add("business-card-footer");

  let businessCardFooterAElement = document.createElement("a");
  businessCardFooterAElement.setAttribute('href', business.website);
  businessCardFooterAElement.setAttribute('target', '_blank');
  businessCardFooterAElement.textContent = 'Visit Website 🌐';

  businessCardFooterElement.appendChild(businessCardFooterAElement);
  businessCardElement.appendChild(businessCardFooterElement);

  return businessCardElement;
  //     <div class="business-card-body">
  //         <div class="business-card-contact-info">

  //         </div>
  //     </div>
  //     <div class="business-card-footer">
  //         <p>
  //             Lorem ipsum dolor sit amet
  //         </p>
  //     </div>
}

getBusiness();
