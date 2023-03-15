import data from "./amazing.js"

const queryString = location.search;
const params = new URLSearchParams(queryString);
const detailsId = params.get('id');

let dataE = data.events;


const detail = dataE.find(detail => detail._id == detailsId);


let detailsContainer = document.getElementById('details');


function createDetails(event, container) {
        let card = document.createElement("div");
        card.innerHTML = `
        <div class="card mb-6" style="max-width: 1000px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${event.image}" id="img-detail" class="img-fluid" alt="${event.name} h-200">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title">Event</h2>
                        <ul class="card-text">
                            <li>Name: ${event.name}</li>
                            <li>Date: ${event.date}</li>
                            <li>Description: ${event.description}</li>
                            <li>Place: ${event.place}</li>
                            <li>Capacity: ${event.capacity}</li>
                            <li>Assistance: ${event.assistance}</li>
                            <li>Price: $${event.price}</li>
                        </ul>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <a href="../index.html" class="btn btn-details align-self-center go">Back to Home Page</a>
                    </div>
            </div>
        </div>`;
    
    return container.appendChild(card);
}


createDetails(detail, detailsContainer)