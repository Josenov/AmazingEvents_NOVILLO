import data from "./amazing.js";

let events = data.events;
let date = data.currentDate
let pastEvents = [];
let cards = " ";


//A traves de un for recorro los eventos y filtro las fechas para luego guardarlas en un array
for (let i = 0; i < events.length; i++) {
    if (events[i].date < date) {
        pastEvents.push(events[i]);
    }

}

//Aca usando metodos de DOM y con un for uso el array filtrado para generar cards por fechas almacenadas
const divCards = document.getElementById('divCards')

for (let i = 0; i < pastEvents.length; i++) {
    cards += 
    `<div class="card" style="width: 18rem;">
        <img src="${pastEvents[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${pastEvents[i].name}</h5>
            <p class="card-text">${pastEvents[i].description}</p>
            <a href="./details.html" class="btn btn-primary">Details</a>
        </div>
    </div>`


}

divCards.innerHTML = cards





