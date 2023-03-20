const fragment = document.createDocumentFragment();

export const createCards = (array, container) => {
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

        fragment.appendChild(div)
    })
    container.appendChild(fragment)
}


export  const createDetails= (card, detailContainer) => {
  let div = document.createElement('div');
  div.classList = 'card-big d-flex bg-light gap-2 rounded p-3';
  div.style = 'width: 90%; height: 90%;';
  div.innerHTML = ` 
      <div class="card-body">
          <img src="${card.image}" class="card-img-top" alt="">
          <div class="card-body2">
              <h5 class="card-title">${card.name}</h5>
              <p class="card-text"> Description: ${card.description}</p>
              <p>Date: ${card.date}</p>
              <p>U$s ${card.price}</p> 
          </div>
      </div>`
      fragment.appendChild(div)

  detailContainer.appendChild(fragment);
}

  export const createCategories = (array) => {
    let categories = array.map(category => category.type)

    categories = categories.reduce((acumulador, elemento) => {
        if (!acumulador.includes(elemento)) {
            acumulador.push(elemento);
        }
        return acumulador
    }, [])
    return categories
}
  
  export const createRadios = (array, container) => {
    array.forEach(category => {
        let div = document.createElement('div')
        div.className = `radios-container ${category.toLowerCase()}`
        div.innerHTML = `
        <input type="radio" id="${category.toLowerCase()}" name="category" value="${category.toLowerCase()}" />
        <label for="${category.toLowerCase()}">${category}</label>
        `
        container.appendChild(div)
    })
}
  
  export const filterSearch = (array, value) => {
    let filteredArray = array.filter(element => element.name.toLowerCase().includes(value.toLowerCase()))
    return filteredArray
}
  
  export const filterRadios = (array) => {
    let checked = document.querySelector('input[type="radio"]:checked');
    if (checked) {
      let filteredArray = array.filter(element => element.type.toLowerCase().includes(checked.value.toLowerCase()))
      return filteredArray
    } else {
      return array;
    }
  } 