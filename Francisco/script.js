let inicio = 0
let fin = 10
let registrosMuertos=[]
let pagina = 1

window.onload = obtener(); 


function obtener(){
fetch(`https://rickandmortyapi.com/api/character?page=${pagina}&status=dead`)
.then(response => response.json())
.then(data => {
 registrosMuertos = data.results.slice(inicio, fin);
    console.log(registrosMuertos)

    renderizar(registrosMuertos)
})
.catch(error => console.error('Error fetching data:', error));
}

function renderizar(datos) {
const tablaContainer = document.getElementById('card')
console.log(datos)
let tablaHtml = ``

datos.forEach(element => {
    console.log(element.image)
    tablaHtml += `
    <div class="card" style="width: 18rem;">
    <img src="${element.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-text">Nombre: ${element.name}</p>
    <p class="card-text">Estado: ${element.status}</p>
    <p class="card-text">Genero: ${element.gender}</p>
    <p class="card-text">Especie: ${element.species}</p>
    </div>
    </div>
    `;
});


tablaContainer.innerHTML = tablaHtml;
}

function siguiente() {
    console.log("HOLA")
    inicio += 10
    fin += 10
    if(fin > 20){
        inicio = 0
        fin = 10
        pagina++
    }
    obtener()

}

function anterior() {
    console.log("HOLA")
    inicio = inicio - 10
    fin = fin -10
    if(inicio < 0){
        inicio = 10
        fin = 20
        pagina--
    }
    obtener()

}