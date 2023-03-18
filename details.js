/*import { createCards } from './helpers.js';
//import data from "./data.js"

let detailContainer = document.querySelector("#cardDetail");
const array = data.events
const queryString = location.search;
const params = new URLSearchParams(queryString);
const dataId = params.get('id');

const selectedCard = array.find(card => card._id == dataId);
console.log(selectedCard)

// Variables globales
let data = [];
let categories = "";


function createDetails(selectedCard, detailContainer) {
    let div = document.createElement('div');
    div.classList = 'card-big d-flex bg-light gap-2 rounded p-3';
    div.style = 'width: 90%; height: 90%;';
    div.innerHTML = ` 
        <div class="card2">
            <img class='bg-light object-fit-contain p-3'  src="${selectedCard.image}" class="card-img-top" alt="">
            <div class="card-body2">
                <h5 class="card-title">${selectedCard.name}</h5>
                <p class="card-text"> Description: ${selectedCard.description}</p>
                <p>Date: ${selectedCard.date}</p>
                <p>U$s ${selectedCard.price}</p> 
            </div>
        </div>`
    detailContainer.appendChild(div);
}

createDetails(selectedCard, detailContainer);

*/
