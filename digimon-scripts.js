const baseURL = 'https://digimon-api.vercel.app/api/digimon/name'
const searchForm = document.getElementById('search-form');
const digitalMonstersList = document.querySelector("section");
const searchButton = document.getElementById("submit");
const input = document.querySelector('input');
searchForm.addEventListener('submit', fetchSpace);

let digiScanner = document.querySelector("digi-Scanner")

let logo = document.getElementById("showDigimon");

function fetchSpace(e){
    e.preventDefault();
    let digimon = input.value;
    console.log(digimon);
   console.log(`${baseURL}/${digimon}`);
    fetch(`${baseURL}/${digimon}`)
    .then(result => result.json())
    .then(json => displayDigimon(json))
}

function displayDigimon(digimon) {
    console.log(digimon);
    //createElement of div;
    //appendChild to div;
    let cardDiv = document.createElement("div");
    digitalMonstersList.appendChild(cardDiv); 
}











// fetch('https://digimon-api.vercel.app/api/digimon')
// .then(function(response) {
//     return response.json();
// })
// .then(function(digimon) {
//     console.log(digimon);
//     for(d of digimon) {
//         let listItem = document.createElement('li');
//         listItem.innerHTML = '<p>' + d.name + '</p>';
//         digitalMonstersList.appendChild(listItem);
//     }
// })


// .catch((error) => console.log("this is an error!", error));

