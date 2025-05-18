const url =
  "https://jcuervonarvaez.github.io/wdd231/chamber/scripts/business.json";
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

  console.log(business);
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
  businessCardProfilePElement.textContent = business.description
  businessCardProfileElement.appendChild(businessCardProfilePElement);

  businessCardBodyElement.appendChild(businessCardProfileElement);

  businessCardElement.appendChild(businessCardBodyElement);

  return businessCardElement;
  //     <div class="business-card-body">
  //         <div class="business-card-contact-info">
  //             <ul>
  //                 <li>test</li>
  //                 <li>test</li>
  //                 <li>test</li>
  //             </ul>
  //         </div>
  //     </div>
  //     <div class="business-card-footer">
  //         <p>
  //             Lorem ipsum dolor sit amet
  //         </p>
  //     </div>
}

getBusiness();
