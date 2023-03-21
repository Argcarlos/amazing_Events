

import { createCards, createTable } from "./helpers.js";

const $container = document.getElementById("container");


// Función para obtener los datos de la API
async function getData() {
    try {
      const api = "./amazing.json";
      await fetch(api)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          const table = document.getElementById("table");
          createTable(data, table);
  
        });
  
    } catch (error) {
      console.log(error);
    }
  }
  
  getData();



