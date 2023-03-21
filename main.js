import {
  createCards,
  createCategories,
  createRadios,
  filterRadios,
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

// Elementos del DOM
const $container = document.getElementById("container");
const $radios = document.getElementById("radios");
const $search = document.querySelector('input[placeholder="search"]');
const $reset = document.getElementById("reset");
const $spinner = document.getElementById("spinner");

// Variables globales
let data = [];
let categories = "";

// Función para mostrar el spinner
const showSpinner = () => {
  $spinner.classList.add("spinner--active");
};

// Función para ocultar el spinner
const hideSpinner = () => {
  $spinner.classList.remove("spinner--active");
};

// Función para obtener los datos de la API
async function getData() {
  try {
    const api = "./amazing.json";
    await fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        createCards(data.events, $container); // Imprimo las cards

        categories = createCategories(data); // Creo las categorías
        createRadios(categories, $radios); // Imprimo los radios de categorías
      });

    hideSpinner(); // Escondo el spinner antes de imprimir las cards

    categories = createCategories(data); // Creo las categorías
    createRadios(categories, $radios); // Imprimo los radios de categorías
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
  let dataFiltered = filterSearch(data, $search.value);
  dataFiltered = filterRadios(dataFiltered);
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
$radios.addEventListener("change", () => {
  filterAndPrint();
});

$search.addEventListener("keyup", () => {
  filterAndPrint();
});

$reset.addEventListener("click", () => {
  // Deselecciono todos los radios de categorías
  document.querySelectorAll('input[type="radio"]:checked').forEach((radio) => {
    radio.checked = false;
  });
  filterAndPrint();
});
