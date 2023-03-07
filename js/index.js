import data from "./amazing.js"


let events = data.events;

//Variable cards usada en el for of de la linea 31
/* let cards = " "; */



//Implementando template para ver como funciona :)
const divCards = document.querySelector('#divCards');
const templateCards = document.querySelector('#template-card').content;
const fragment = document.createDocumentFragment();



events.forEach(events=>{
    templateCards.querySelector('.card-img-top').src = events.image;
    templateCards.querySelector('.card-title').textContent = events.name;
    templateCards.querySelector('.card-text').textContent = events.description;
    const repeatCard = templateCards.cloneNode(true);
    fragment.appendChild(repeatCard);
})

divCards.appendChild(fragment)



//Aca use el for of visto en masterclass para implementarlo y ver como funciona ya que no neceistaba filtrar por fechas con los otros js 
/* for (let info of events) {
    cards +=
        `<div class="card" style="width: 18rem;">
        <img src="${info.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${info.name}</h5>
            <p class="card-text">${info.description}</p>
            <a href="../pages/details.html" class="btn btn-primary">Details</a>
        </div>
    </div>`



}

divCards.innerHTML = cards */








