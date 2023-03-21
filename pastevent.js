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

        const dateUp = Date(data.date);
        const dateToday = Date(data.currentDate);
        
        if(dateUp == dateToday) {
          createCards(data.events, $container); // Imprimo las cards
        } else {
          
        }
        

      });

  
  } catch (error) {
    console.log(error);
  }
}

getData();


