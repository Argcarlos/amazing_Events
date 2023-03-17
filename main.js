import data from "./data.js"
console.log(data)

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
// DOM Manipulation


//elements
const $container = document.getElementById('container');
const fragment = document.createDocumentFragment();
const $checkbox = document.getElementById('checkbox');
const $search = document.querySelector('input[placeholder="search"]');
let $cardTemplate = document.querySelector("#cardTemplate")

const array = data.events;
console.log(array)
const createCards = (array, container) => {
    container.innerHTML = ""
    array.forEach(data => {
        let div = document.createElement('div');
        div.className = 'card'
        div.innerHTML = `
        <img src="${data.image}" class="card-img-top" id="" alt="">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">${data.description}</p>
          <p>Date: ${data.date}</p>
          <p>U$s ${data.price}</p>
          <a href="./details.html?id=${data._id}" class="btn btn-primary align-self-end justify-self-end">Details</a>
         
        </div>
      </div>
        `
        fragment.appendChild(div);
    })
    container.appendChild(fragment);
}

createCards(data.events, $container)

const createCategories = (array) =>{
  let categories = array.map(category => category.type)

  categories = categories.reduce((sum, element)=>{
      if(!sum.includes(element)){
          sum.push(element);
      }
      return sum
  }, [])
  return categories 
}

let categories = createCategories(data)
console.log(categories)

const filterSearch = (array, value) => {
  let filteredArray = array.filter(element=> element.name.toLowerCase().includes(value.toLowerCase()))
      return filteredArray
}
const filterCheckbox = (array) => {
let checked = document.querySelector('input[type="myCheckbox"]:checked');
console.log(checked)
let filteredArray = array.filter(element => element.type.toLowerCase().includes(checked.id.toLowerCase()))
return filteredArray
}

const filterAndPrint =  (array) =>{
let arrayFiltered = filterSearch(array, $search.value)
arrayFiltered = filterCheckbox(arrayFiltered)
return arrayFiltered
}

$search.addEventListener('keyup', (e) =>{
let dataFilter = filterAndPrint(data)
createCards(dataFilter, $container)
})

$checkbox.addEventListener('change', ()=>{
let dataFilter = filterAndPrint(data)
createCards(dataFilter, $container)
}) 

// Code json

const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('../data/amazing.json')
    
    console.log(res);
    data = await json.res;
    console.log(data);
    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''

    results.forEach(card => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
        <img src="${data.image}" class="card-img-top" id="" alt="">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">${data.description}</p>
          <p>Date: ${data.date}</p>
          <p>U$s ${data.price}</p>
          <a href="./details.html?id=${data._id}" class="btn btn-primary align-self-end justify-self-end">Details</a>
         
        </div>
      </div>
        `

        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}
