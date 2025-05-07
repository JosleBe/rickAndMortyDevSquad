const container = document.getElementById("content");

async function load(){
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character/?gender=female");
        const data = await response.json();

        data.results.slice(0,12).forEach(element => {
            const card = document.createElement("div");
            card.className = "col-md-3 mb-4";

            card.innerHTML = `
                        <div class="card h-100" style="width: 18rem;">
                        <img src="${element.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.name}</h5>
                            <p class="card-text"> <span class="fw-bold"> Estado: </span> ${element.status} </p>
                            <p class="card-text"> <span class="fw-bold">Genero: </span> ${element.gender}</p>
                            <p class="card-text"> <span class="fw-bold">Especie: </span> ${element.species}</p>
                        </div>
                        </div>`;

            container.appendChild(card);
        });
    }catch (error) {
        console.log("Error obteniendo los datos", error);
    }
}

load();