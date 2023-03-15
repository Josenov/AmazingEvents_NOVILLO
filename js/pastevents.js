import data from "./amazing.js";
import { pastEvents, drawCards, createCheckBox, checkedCards} from "./functions.js"

/* let dataE = data.events; */
let currentDate = data.currentDate;
const divCards = document.getElementById('divCardsP');

let pEvents = pastEvents(data.events, data.currentDate);
drawCards(pEvents, divCards);
console.log(pEvents)


/* drawCards(pastEvents(data.events, currentDate), divCards); */


//////////Dinamic Checkboxes///////////
const checkContainer = document.getElementById('checkboxesContainer')
const input = document.querySelector('#search-bar')


input.addEventListener('input',superFilter)

checkContainer.addEventListener('change',superFilter)



createCheckBox(pEvents, checkContainer);

checkedCards(pEvents, divCards);

textFilter(pEvents, input.value);

categoryFilter(pEvents);

superFilter();



function categoryFilter(array){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    let arrayChecks = Array.from(checkboxes)
    let arrayChecksChecked = arrayChecks.filter(check => check.checked)
    let arrayChecksCheckedValues = arrayChecksChecked.map(checkChecked => checkChecked.value)
    console.log(arrayChecksCheckedValues);
    let arrayFiltered = array.filter(element => arrayChecksCheckedValues.includes(element.category))
    if(arrayChecksChecked.length > 0){
        return arrayFiltered
    }
    return array
}

function superFilter(){
    let filterA = textFilter(pEvents, input.value)
    let filterB = categoryFilter(filterA)
    checkedCards(filterB, divCards)
}


function textFilter(array,text){
    let arrayFiltered = array.filter(element => element.name.toLowerCase().includes(text.toLowerCase()))
    return arrayFiltered
}




