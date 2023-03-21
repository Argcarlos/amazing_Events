import {
  createCards,
  createCategories,
  createCheckbox,
  filterCheck,
  filterSearch,
} from "./helpers.js";


const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
// DOM Manipulation

// Element del DOM
const $container = document.getElementById("container");
const $checkbox = document.getElementById("container-check")
const $search = document.querySelector('input[placeholder="search"]');
const $reset = document.getElementById("reset");
const $spinner = document.getElementById("spinner");
//const $search = document.getElementById('search-input');

// Variables global
let data = [];
let categories = "";

// Function to show the spinner
const showSpinner = () => {
  $spinner.classList.add("spinner--active");
};

// Function to hide the spinner
const hideSpinner = () => {
  $spinner.classList.remove("spinner--active");
};

// Function to get  data from API
async function getData() {
  try {
    const api = "./amazing.json";
    await fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        hideSpinner(); // Hide the spinner before to print the cards
        createCards(data.events, $container); // print cards

        categories = createCategories(data); // Create the categories
        console.log(categories)
        createCheckbox(categories, $checkbox); // Print los checkboxes de categorías
        // Store the data in a variable accessible to the filterAndPrint function
        window.data = data.events;
       
      });
 
  } catch (error) {
    console.log(error);
   
  }
}
//Llamo a la función para activar spinner
showSpinner();
// Llamo a la función para obtener los datos de la API
getData();



// Función para filtrar y mostrar las cards
const filterAndPrint = () => {
  let dataFiltered = filterSearch(data.events, e.target.value);
  dataFiltered = filterCheckbox(dataFiltered);
  if (dataFiltered.length === 0) {
    const $noResults = document.getElementById("no-results");
    $noResults.style.display = "block";
  } else {
    const $noResults = document.getElementById("no-results");
    $noResults.style.display = "none";
  }
  createCards(dataFiltered, $container);
};


// Eventos de los elementos del DOM
$checkbox.addEventListener("change", () => {
  filterAndPrint();
});

$search.addEventListener("keyup", () => {
  filterAndPrint();
});

$reset.addEventListener("click", () => {
  // Deselecciono todos los radios de categorías
  document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
    checkbox.checked = false;
  });
  filterAndPrint();
});