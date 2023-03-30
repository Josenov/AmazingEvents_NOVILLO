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






//////API Async Function///////

let urlApi = "../assets/API/amazing.json"


export async function loadDataFromApi(){

    try{
    const response = await fetch(urlApi)
    const data = await response.json()
    return data

    }
    catch(error){
        console.log(error)}
    
}

export async function getDataFromApi(){
    try{
        const data = await loadDataFromApi();
        const newEvents = data.events;
        const newCurrentDate = data.currentDate;
        return {newCurrentDate, newEvents}
    }
    catch(error){
        console.log(error)}
}




///////Stats Functions///////


 ////High Percentage Searcher////
export function highPercentageEvent(arr){
    let arrAssistance = [...arr.filter(e => e.estimate)];
    let arrHighPercentage = [];
    arrAssistance.forEach(e =>{
        let percentage = ((e.estimate/e.capacity) * 100).toFixed(1)
        arrHighPercentage.push({
            name: e.name,
            perc: percentage
            }); 

        console.log(percentage)    
    })

    let orderedResults = arrHighPercentage.sort((a,b)=>{

        return b.perc - a.perc
    })    
    return orderedResults[0]
    
}

////Low Percentage Searcher////
export function lowPercentageEvent(arr){
    let arrAssistance = [...arr.filter(e => e.estimate)];
    let arrLowPercentage = [];
    arrAssistance.forEach(e =>{
        let percentage = ((e.estimate/e.capacity) * 100).toFixed(1)
        arrLowPercentage.push({
            name: e.name,
            perc: percentage
            });
            console.log(percentage)
    })

    let orderedResults = arrLowPercentage.sort((a,b)=>{

        return a.perc - b.perc
    }) 
    return orderedResults[0]
    
}


///High Capacity Searcher

export function highCapacityEvent(arr){
    let arrCapacity = [...arr.filter(e => e.capacity)];
    let arrHighCapacity = [];
    arrCapacity.forEach(e =>{
        let capacity = e.capacity
        arrHighCapacity.push({
            name: e.name,
            capac: capacity
            });;
        console.log(capacity)
        
    })

    let orderedResults = arrHighCapacity.sort((a,b)=>{

        return b.capac - a.capac
    }) 

    console.log(orderedResults)
    return orderedResults[0]
    
}



//Revenues function

export function totalRevenues(arr){
    let revenues = 0

    arr.forEach(e =>{
        let revenue = e.price * ((e.assistance ? e.assistance : e.estimate))
        revenues += revenue;
    })
    console.log(revenues)
    return revenues;
}




// Past & Upcoming Filter que luego usare en la funcion categoryStatistics para filtrar por fechas en la tabla
export function arrPastEvents(arr, currentDate) {
    const pastEvents = arr.filter((e) => e.date < currentDate)
    return pastEvents
}

export function arrUpcomingEvents(arr, currentDate) {
    const upcomingEvents = arr.filter((e) => e.date > currentDate)
    return upcomingEvents
}


//en esta funcion uso un reduce para acumular valores y mediante el for recorrer cada categoria para ir filtrando e ir guardando en catStats, en el return puedo ordenar por ganancias o concurrencia segun se quiera mostrar en la pagina
export function categoryStatistics(arr, categ, objProperty) {
    let categStats = []
    let acum = (acc, current) => acc + current
    for (let i = 0; i < categ.length; i++) {
        categStats[i] = {
            category: categ[i],
            revenue: arr.filter(e => e.category == categ[i]).map(e => (e[objProperty]) * e.price).reduce(acum, 0),
            attendance: arr.filter(e => e.category == categ[i]).map(e => (e[objProperty] * 100) / e.capacity).reduce(acum, 0) / arr.filter(e => e.category == categ[i]).length
        }
    }
    
    //console.log(catStats)
    return categStats.filter(e => e.attendance > 0).sort((b, a) => a.attendance - b.attendance)

    
}

//funcion para dibujar las tablas
export function drawCategoryStatistics(arr, container) {
    let statsHtml = document.getElementById(container)
    arr.forEach(e => {
            statsHtml.innerHTML += `

                                <td>${e.category}</td>
                                <td>$${e.revenue}</td>
                                <td>${e.attendance.toFixed(1)}%</td>
                                `
    });
}