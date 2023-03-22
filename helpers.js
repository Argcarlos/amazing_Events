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
  
  div.innerHTML = ` 
      <div class="card-body2">
          <img src="${card.image}" class="card-img-top" alt="">
          <div class="card-body3">
              <h5 class="card-title">${card.name}</h5>
              <p>Category: ${card.category}</p>
              <p class="card-text"> Description: ${card.description}</p>
              <p>Category: ${card.category}</p>
              <p>Place: ${card.place}</p>
              <p>Assistance: ${card.assistance}</p>
              <p>Date: ${card.date}</p>
              <p>U$s ${card.price}</p> 
          </div>
      </div>`
      fragment.appendChild(div)

  detailContainer.appendChild(fragment);
}

//Table
function createTable(data, table) {
  // Create table header
  const header = table.createTHead();
  const headerRow = header.insertRow();
  const headerCell = headerRow.insertCell();
  headerCell.colSpan = "3";
  headerCell.textContent = "Events statistics";

  // Create table body
  const body = table.createTBody();
  
  // Create rows for data
  const rows = [
    ["Events with the hightest percentage of attendance", "Events with the lowest percentage of attendance", "Events with larger capacity"],
    [data.highestAttendanceEvent, data.lowestAttendanceEvent, data.largestCapacityEvent],["", "", ""],["", "", ""],
    ["Upcoming Events statistics by category", "", ""],
    ["Categories", "Revenues", "Percentage of attendance"],["", "", ""],["", "", ""],
    ["Past Events statistics by category", "", ""],
    ["Categories", "Revenues", "Percentage of attendance"],["", "", ""],["", "", ""]
  ];
  
  for (let i = 0; i < rows.length; i++) {
    const row = body.insertRow();
    for (let j = 0; j < rows[i].length; j++) {
      const cell = row.insertCell();
      cell.textContent = rows[i][j];
    }
  }
  
  // Create rows for upcoming event statistics
  const upcomingEvents = data.events;
  console.log(upcomingEvents); 
  for (let i = 0; i < upcomingEvents.length; i++) {
    const row = body.insertRow();
    const categoryCell = row.insertCell();
    const revenueCell = row.insertCell();
    const attendanceCell = row.insertCell();
    categoryCell.textContent = upcomingEvents[i].category;
    console.log(categoryCell)
    revenueCell.textContent = upcomingEvents[i].revenues;
    console.log(revenueCell)
    attendanceCell.textContent = upcomingEvents[i].attendancePercentage;
    console.log(attendanceCell)
  }
  
  // Create rows for past event statistics
  const pastEvents = data.events;
  for (let i = 0; i < pastEvents.length; i++) {
    const row = body.insertRow();
    const categoryCell = row.insertCell();
    const revenueCell = row.insertCell();
    const attendanceCell = row.insertCell();
    categoryCell.textContent = pastEvents[i].category;
    revenueCell.textContent = pastEvents[i].revenues;
    attendanceCell.textContent = pastEvents[i].attendancePercentage;
  }
}

export {createTable};


  export const createCategories = (array) => {

    let categories = array.map(category => category.category)

    categories = categories.reduce((sum, element) => {
        if (!sum.includes(element)) {
            sum.push(element);
        }
        return sum
    }, [])
    return categories
}
  
  export const createCheckbox = (array, container) => {
    array.forEach(category => {
        let div = document.createElement('div')
        div.classList = `container-check ${category.toLowerCase()}`
        div.innerHTML = `
        <input type="checkbox" id="${category.toLowerCase()}" name="category" value="${category.toLowerCase()}" />
        <label for="${category.toLowerCase()}">${category}</label>
        `
        console.log(div)
    

        container.appendChild(div)
    })
}
  
  export const filterSearch = (array, value) => {
    console.log(array, value)
    let filteredArray = array.filter(element => element.name.toLowerCase().includes(value.toLowerCase()))
    console.log(filteredArray)
    return filteredArray
}
  
  export const filterCheck = (array) => {
    let checked = document.querySelector('input[type="checkbox"]:checked');
    console.log(checked)
    if (checked) {
      let filteredArray = array.filter(element => element.type.toLowerCase().includes(checked.value.toLowerCase()))
      console.log(filteredArray)
      return filteredArray
    } else {
      return array;
    }
  } 