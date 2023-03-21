import { createDetails } from "./helpers.js";


// Función para obtener los datos de la API
async function getData() {
    try {
      const api = "./amazing.json";
      await fetch(api)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          let detailContainer = document.querySelector("#detailContainer");
          const array = data.events;
          const queryString = location.search;
          const params = new URLSearchParams(queryString);
          const dataId = params.get("id");
  
          const selectedCard = array.find((card) => card._id == dataId);
  
          createDetails(selectedCard, detailContainer);

        });
  
    } catch (error) {
      console.log(error);
    }
  }

  getData();