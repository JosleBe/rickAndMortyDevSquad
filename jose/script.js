import rickAndMortyService from '../service.js';

const cards = document.querySelector(".main-content");
const SEARCH_SPECIES = "Human";
const searchInput = document.getElementById("search-input");
const addInfo = document.getElementById("add-info");

let charactersData = [];

const CONTENT_PER_PAGE = 10;

addInfo.addEventListener("click", (event) => {
    const span = event.currentTarget.querySelector('.btn-text-add');

    if (span.textContent === "Volver") {
        cards.innerHTML = "";
        const limitedData = charactersData.slice(0, CONTENT_PER_PAGE);
        limitedData.forEach(character => {
            renderCard(
                character.name,
                character.status,
                character.gender,
                character.species,
                character.image
            );
        });
        span.textContent = 'Ver más';
    } else {
        cards.innerHTML = "";
        const limitedData = charactersData.slice(CONTENT_PER_PAGE, 20);
        limitedData.forEach(character => {
            renderCard(
                character.name,
                character.status,
                character.gender,
                character.species,
                character.image
            );
        });
        span.textContent = 'Volver';
    }
});


const getData = async () => {
    try {
        const response = await rickAndMortyService.getbySpecies(SEARCH_SPECIES);
        if (response.results) {
            charactersData = response.results;
            renderCards(charactersData);
        }
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        cards.innerHTML = `<p class="error">Error al cargar personajes.</p>`;
    }
};

getData();

const renderCards = (data) => {
    cards.innerHTML = "";
    const limitedData = data.slice(0, CONTENT_PER_PAGE);
    limitedData.forEach(character => {
        renderCard(
            character.name,
            character.status,
            character.gender,
            character.species,
            character.image
        );
    });
};


const renderCard = (name, status, gender, species, image) => {
    const cardHTML = `
        <div class="card">
            <img src="${image}" alt="${name}" class="card-img"/>
            <div class="card-content">
                <h2 class="card-title">${name}</h2>
                <p><strong>Estado:</strong> ${status}</p>
                <p><strong>Género:</strong> ${gender}</p>
                <p><strong>Especie:</strong> ${species}</p>
            </div>
        </div>
    `;
    cards.innerHTML += cardHTML;
};

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredData = charactersData.filter(character =>
        character.name.toLowerCase().includes(query)
    );
    renderCards(filteredData);
});
