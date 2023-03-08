import data from "./data.js"
console.log([document])


//elements
const $container = document.getElementById('container');
const fragment = document.createDocumentFragment();
const $Checkbox = document.getElementById('checkbox');
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
const filterRadios = (array) => {
let checked = document.querySelector('input[type="myCheckbox"]:checked');
console.log(checked)
let filteredArray = array.filter(element => element.type.toLowerCase().includes(checked.id.toLowerCase()))
return filteredArray
}

const filterAndPrint =  (array) =>{
let arrayFiltered = filterSearch(array, $search.value)
arrayFiltered = filterRadios(arrayFiltered)
return arrayFiltered
}

$search.addEventListener('keyup', (e) =>{
let dataFilter = filterAndPrint(data)
createCards(dataFilter, $container)
})

$radios.addEventListener('change', ()=>{
let dataFilter = filterAndPrint(data)
createCards(dataFilter, $container)
}) 

