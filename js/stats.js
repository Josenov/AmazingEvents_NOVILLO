import {getDataFromApi, highPercentageEvent, lowPercentageEvent, highCapacityEvent, totalRevenues, arrPastEvents, arrUpcomingEvents, categoryStatistics, drawCategoryStatistics} from "./functions.js"

const data = await getDataFromApi();

let dataEvents = data.newEvents;
let currentDate = data.newCurrentDate

console.log(dataEvents)


//capturo las filas de la table donde iran los eventos de la tabla 1
let highAttendance = document.getElementById('row-1');
let lowAttendance = document.getElementById('row-2');
let largerCapacity = document.getElementById('row-3');

let highAttendanceEvent = highPercentageEvent(dataEvents)
let lowAttendanceEvent = lowPercentageEvent(dataEvents)
let highCapacity = highCapacityEvent(dataEvents)

highAttendance.innerHTML=(`${highAttendanceEvent.name}`)
lowAttendance.innerHTML = (`${lowAttendanceEvent.name}`)
largerCapacity.innerHTML = (`${highCapacity.name}`)





let pastEvents = arrPastEvents(dataEvents, currentDate)
let upcomingEvents = arrUpcomingEvents(dataEvents, currentDate)
totalRevenues(dataEvents)


//Separo categorias
const allCategories = dataEvents.map((e) => e.category)
        
const categories = new Set(allCategories)
        
const arrayCategories = Array.from(categories)

//console.log(arrayCategories)


//declaro variables que luego seran usadas en las funciones
let upcomingStats = categoryStatistics(upcomingEvents, arrayCategories, 'estimate')

//console.log(upcomingStats)

let pastStats = categoryStatistics(pastEvents,arrayCategories, 'assistance')

//console.log(pastStats)


drawCategoryStatistics(upcomingStats, 'upcoming-stats')

drawCategoryStatistics(pastStats, 'past-stats')