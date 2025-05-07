import BASE_URL from "./app.config.js";

const rickAndMortyService = {
  getByStatus: async (status) => {
    try {
      const response = await fetch(`${BASE_URL}?status=${status}`);

      if (!response.ok) return console.log("Error de peticion");

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener los datos", error);
    }
  },
  getbySpecies: async (species) => {
    try {
      const response = await fetch(`${BASE_URL}?species=${species}`);

      if (!response.ok) return console.log("Error de peticion");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error al obtner los datos", error);
    }
  },
  getByGenders: async (gender) => {
    try {
      const response = await fetch(`${BASE_URL}?gender=${gender}`);
      if (!response.ok) return console.log("Error de peticion");
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error al obtener los datos", error);
    }
  },
};

console.log(await rickAndMortyService.getByStatus("Dead"));
console.log(await rickAndMortyService.getByGenders("Male"));
console.log(await rickAndMortyService.getbySpecies("Human"));

export default rickAndMortyService;
