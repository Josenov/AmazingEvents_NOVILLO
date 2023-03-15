import data from "./amazing.js"
import {drawCards, createCheckBox, checkedCards} from "./functions.js"

let dataE = data.events;

////////Calling all cards(home page)
const divCards = document.getElementById('divCards');

drawCards(dataE, divCards);



//////////Dinamic Checkboxes///////////
const checkContainer = document.getElementById('checkboxesContainer')
const input = document.querySelector('#search-bar')


input.addEventListener('input',superFilter)

checkContainer.addEventListener('change',superFilter)



createCheckBox(dataE, checkContainer);

checkedCards(dataE, divCards);

textFilter(dataE, input.value);

categoryFilter(dataE);

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
    let filterA = textFilter(dataE, input.value)
    let filterB = categoryFilter(filterA)
    checkedCards(filterB, divCards)
}


function textFilter(array,text){
    let arrayFiltered = array.filter(element => element.name.toLowerCase().includes(text.toLowerCase()))
    return arrayFiltered
}









