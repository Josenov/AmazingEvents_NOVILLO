import data from "./amazing.js"


let events = data.events;
let cards = " ";


//Aca use el for of para implementarlo y ver como funciona ya que no neceistaba filtrar por fechas con los otros js 
const divCards = document.getElementById('divCards')

for(let info of events){
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

divCards.innerHTML=cards








