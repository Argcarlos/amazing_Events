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
    for (let data of array){
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
    }
    container.appendChild(fragment);
}

createCards(data.events, $container)

const createCategories = (array) =>{
  let categories = array.map(category=> category.type)

  categories = categories.reduce((sum, element)=>{
      if(!sum.includes(element)){
          sum.push(element);
      }
      return sum
  }, [])
  return categories 
}
let categories = createCategories(data)
