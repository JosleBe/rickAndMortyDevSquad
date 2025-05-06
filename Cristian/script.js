const container = document.querySelector(".container-card");

async function fetchAliveCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character/?status=alive");
    const data = await response.json();
    const characters = data.results;

    characters.forEach((character, index) => {
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
  } catch (error) {
    console.error("Error al obtener personajes:", error);
    container.innerHTML = "<p>Error al cargar los personajes.</p>";
  }
}

fetchAliveCharacters();
