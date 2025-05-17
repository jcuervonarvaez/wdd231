const cards = document.querySelector("#cards");

const url =
  "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";

async function getProphetData() {
  try {
    const response = await fetch(url, { method: "get" });
    const data = await response.json();
    displayProphets(data.prophets);
  } catch (error) {
    alert("Error on API Request");
    console.error(error.message);
  }
}

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement("section");
    let fullName = document.createElement("h2");
    let birthPlace = document.createElement("p");
    let birthDate = document.createElement("p");
    let deathDate = document.createElement("p");
    let portrait = document.createElement("img");

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthPlace.innerHTML = `🏘️ <b>Place of Birth:</b> ${prophet.birthplace}`;
    birthDate.innerHTML = `🥳<b>Date of Birth:</b> ${prophet.birthdate}`;
    if (prophet.death) {
      deathDate.innerHTML = `🪦<b>Date of Death:</b> ${prophet.death}`;
    } else {
        deathDate.innerHTML = `<b>Alive ❤️</b>`;
    }

    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);
    card.appendChild(deathDate);
    cards.appendChild(card);
  });
};

getProphetData();
