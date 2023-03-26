import { upcomingEvents, drawCards, createCheckBox, checkedCards, getDataFromApi} from "./functions.js"

const data = await getDataFromApi();

/* let dataE = data.events; */

const divCards = document.getElementById('divCards');


let uEvents = upcomingEvents(data.newEvents, data.newCurrentDate);
drawCards(uEvents, divCards);


/* drawCards(upcomingEvents(data, currentDate), divCards); */


//////////Dinamic Checkboxes///////////
const checkContainer = document.getElementById('checkboxesContainer')
const input = document.querySelector('#search-bar')


input.addEventListener('input',superFilter)

checkContainer.addEventListener('change',superFilter)



createCheckBox(uEvents, checkContainer);

checkedCards(uEvents, divCards);

textFilter(uEvents, input.value);

categoryFilter(uEvents);

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
    let filterA = textFilter(uEvents, input.value)
    let filterB = categoryFilter(filterA)
    checkedCards(filterB, divCards)
}


function textFilter(array,text){
    let arrayFiltered = array.filter(element => element.name.toLowerCase().includes(text.toLowerCase()))
    return arrayFiltered
}





















