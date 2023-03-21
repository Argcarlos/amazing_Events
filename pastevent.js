import { createCards } from "./helpers.js";

const $container = document.getElementById("container");


// Función para obtener los datos de la API
async function getData() {
  try {
    const api = "./amazing.json";
    await fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const currentDate = new Date();
        const events = data.events.filter(event => new Date(event.date) <= currentDate);

        createCards(events, $container); // Imprimo las cards
        

      });

  
  } catch (error) {
    console.log(error);
  }
}

getData();


