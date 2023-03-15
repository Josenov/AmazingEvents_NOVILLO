//cards functions 

export function pastEvents(myData, currentDate) {
    console.log(myData)
    return  myData.filter(myEvent => myEvent.date < currentDate)
};

export function upcomingEvents(myData, currentDate) {
    console.log(myData)
    return  myData.filter(myEvent => myEvent.date > currentDate)
};



export function drawCards(info, container) {
    container.innerHTML = "";
    console.log(container)
    let fragmento = document.createDocumentFragment();
    info.forEach(card => {
        let div = document.createElement("div")
        div.className = "card"
        div.style = "width: 18rem;"
        div.innerHTML=
        `<img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">${card.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>`
        fragmento.appendChild(div)
    })

    container.appendChild(fragmento)
}


//checkboxes
export function createCheckBox(array, container){
    let arrayCategory = array.map(events => events.category)
    /* console.log(arrayCategory) */
    let setCategory = new Set(arrayCategory)
    /* console.log(setCategory) */
    let arrayChecks = Array.from(setCategory)
    /* console.log(arrayChecks) */
    let checkboxes = ''
    arrayChecks.forEach(category => {
        checkboxes += `
        <form>
            <div class="form-check">
                <label class="form-check-label" for="${category}">${category}</label>
                <input class="form-check-input" type="checkbox" role="switch" id="${category}" value="${category}">      
            </div>
        </form>
        `
    })
    container.innerHTML = checkboxes
}

export function checkedCards(array, container){
    if(array.length == 0){
        container.innerHTML = `<h4 class="display-3">Sorry, Can't find what you are looking for</h4>`
        return
    }
    let card = ''
    array.forEach(events => {
        card += `
        <div class="card" style="width: 16rem;">
                <img src="${events.image}" class="card-img-top" alt="..." h-100>
                <div class="card-body">
                    <h5 class="card-title">${events.name}</h5>
                    <p class="card-text">${events.description}</p>
                    <a href="../pages/details.html?id=${events._id}" class="btn btn-primary">Details</a>
                </div>
            </div>`
    })
    container.innerHTML = card
}




