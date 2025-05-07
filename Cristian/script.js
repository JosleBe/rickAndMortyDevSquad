import rickAndMortyService from "../service.js";
const container = document.querySelector(".container-card");

async function fetchAliveCharacters() {
  const characters = await rickAndMortyService.getByStatus("alive");
  console.log("si");

  characters.results.forEach((character) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
          <div class="card-body">
            <img src="${character.image}" alt="${character.name}" />
            <p class="card-text">Nombre:</p>
            <span>${character.name}</span>
            <p class="card-text">Estado:</p>
            <span>${character.status}</span>
            <p class="card-text">Género:</p>
            <span>${character.gender}</span>
            <p class="card-text">Especie:</p>
            <span>${character.species}</span>
            <div class="card-footer">
              <span>#</span>
              <span>${character.id}</span>
            </div>
          </div>
        `;

    container.appendChild(card);
  });
}

fetchAliveCharacters();
