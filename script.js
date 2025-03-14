/*
// UNDERVISNING:

//Flat Array
1. Vi lager en array og console log det som er i array
2. Vi lager et element i HTML som vi kan putte array element inn i
3. Vi går gjennom stegene for å få teksten ut på siden
4. Vi ser på måter å få hele array ut som liste, hvordan vi kan få lengden på array og hvordan vi kan få tak i siste element i array
*/

// JavaScript Array
const cities = ["London", "Bergen", "Tokyo", "Berlin"];
console.log(cities) // Logger ut en hel array
console.log(cities[1]); // Logger ut nr. 1 på listen
console.log(cities.length); // Logger ut lengden på arrayet
console.log(cities.indexOf("London")) // Logger ut indexen til et element i arrayet
console.log(cities.toString()); // Logger ut som en string liste istedenfor en array liste


const newElement = document.createElement("h1");
newElement.textContent = cities[1];
document.body.appendChild(newElement);

/*
// OPPGAVE 1:
1.Lag et array med dine favoritter innen et tema, musikk, tv, film, bøker etc, eventuelt et enkelt array av et emne, frukt, handlevarer, bilmerker etc
2. console.log de forskjellige elementene i arrayet
3. lag et nytt <p> element og legg til en av elementene fra array i <p>
4. legg til <p> til i HTML slik at det er synlig i browser
*/

// JavaScript Array
const fruitBowl = ["Banana", "Apple", "Orange", "Peach"];
console.log(fruitBowl);
console.log(fruitBowl[0]) // Tested all numbers from 0-3
console.log(fruitBowl.toString()) // Seing it as a string list

const viewFruitBowl = document.createElement("p");
viewFruitBowl.textContent = fruitBowl;
document.body.appendChild(viewFruitBowl);

/*
// UNDERVISNING:
//Objects og array av objects
1. Vi lager et object for en person, navn, alder, erTilstede og console log det som er i object
2. Hvordan console.log objects
3. Array av objects
4. Objects of array
4. Hvordan vi console.log det
*/

// Javascrip Object
const personOne = {
  name: "Anders",
  age: 21,
  isTeaching: true,
};
console.log(personOne.isTeaching);

const personTwo = {
  name: "Julie",
  age: 27,
  isTeaching: false,
};
console.log(personTwo.isTeaching);


// JavaScript Array with objects
const people = [{
  name: "Julie",
  age: 27,
  isAtFontenehuset: false,
}, {
  name: "Anders",
  age: 21,
  isAtFontenehuset: true,
},
{
  name: "Adeleide",
  age: 300,
  isAtFontenehuset: false,
},
{
  name: "Skybert",
  age: 10,
  isTeaching: true,
}];

console.log(people[0].name);
console.log(people[1].name);
console.log(people[3].name);


// JavaScript Object with Arrays
const storeItems = {
  fruit: ["Banana", "Apple", "Pinapple"],
  milk: ["Cow milk", "Coco milk", "Diet milk"]
}

console.log(storeItems.fruit[0]);
console.log(storeItems.milk[1]);

/*
// OPPGAVE 2:
1. lag et object for et fotballag, et band etc, det skal inneholde et navn og et antall
2. Console log ulike elementer i fra object
3 lag 3 objects, lag en array av forskjellige navnene fra objectene
*/

/*
// OPPGAVE 3:
Se på array av objects som heter fontenehus
1. console.log navnet på det 4. huset i array
2. console.log adressen til Fontenehuset Oslo Øst 
3. legg til Fontenehuset Bærum i objektet
    Fontenehuset Bærum
    Industriveien 2, 1337 Sandvika
    https://www.fontenehuset-baerum.no/ 
4. lag en a link i HTML med en href som inneholder nettsiden til Fontenehuset Oslo Sentrum
5. Oppdater objectet med ny key som inneholder verdier for antall medlemmer, bruk oppdiktet tall,
    forslag til tall: 500, 200, 120, 230
6. legg til et nytt fontenehus
    https://fontenehuset-mortensrud.no/,
    legg til navn, adresse, nettside, avdelinger- dikte opp, antall medlemmer- dikte opp
    console.log den nye avdelingen avdeling
*/

/*
// FONTENEHUS ARRAY
 const fontenehus = [
  {
    navn: 'Fontenehuset Oslo Øst',
    adresse: 'Hagegata 25, 0653 OSLO',
    nettside: 'https://www.fontenehuset-osloost.no/',
    avdelinger: ['administrasjon', 'kjøkken', 'media', 'turgruppe'],
  },
  {
    navn: 'Fontenehuset Oslo Sentrum',
    adresse: 'Holbergs gate 5, 0166 Oslo',
    nettside: 'https://www.fontenehuset.no/',
    avdelinger: ['administrasjon', 'kjøkken', 'media', 'prosjektgruppe'],
  },
  {
    navn: 'Fontenehuset Trondheim',
    adresse: 'Dronningens gate 15, 7011 Trondheim',
    nettside: 'https://www.fontenehuset-trondheim.no/',
    avdelinger: ['administrasjon', 'kjøkken', 'media'],
  },
  {
    navn: 'Fontenehuset Asker',
    adresse: 'Knud Askers vei 26B',
    nettside: 'https://www.fontenehusetasker.no/',
    avdelinger: ['administrasjon', 'kjøkken', 'media'],
  },
  {
    navn: 'Fontenehuset Ålesund',
    adresse: 'Lihauggata 8B, 6003 Ålesund',
    nettside: 'https://www.fontenehuset-alesund.no/',
    avdelinger: ['administrasjon', 'kjøkken', 'media'],
  },
];



let aTag = document.createElement('a');
aTag.textContent = 'Fontenehuset Trondheim';
aTag.target = '_blank';
aTag.href = fontenehus[2].nettside;
document.body.appendChild(aTag);
*/

/*
//HANDLELISTE

//Html
1. Hente inn id'er fra HTML
2. Lage en tom handleliste
3. Lage eventlistener for de forskjellige knappene

//Legg til med knapp
1. Eventlistener må hente value fra input
2. preventDefault
3.Eventlistener må pushe input inn i array, slik at vi lagrer det et sted
4. Vi lager et element som får verdi av input og som vi legger til i liste

//Ta bort et element med knapp
1. preventDefault
2.pop
3.removeChild, liste.lastElementChild

let list = document.querySelector('#list');
let addBtn = document.querySelector('#addBtn');
let removeBtn = document.querySelector('#removeBtn');
let displayList = document.querySelector('#displayList');
let removeAll = document.querySelector('#removeAll');

let handleListe = [];

addBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let input = document.querySelector('#input').value;
  let newListElement = document.createElement('p');
  newListElement.textContent = input;
  list.appendChild(newListElement);
  handleListe.push(input);
  console.log(handleListe);
});

displayList.addEventListener('click', function () {
  handleListe.forEach((item) => {
    let listElement = document.createElement('p');
    listElement.textContent = item;
    list.appendChild(listElement);
  });
});

removeAll.addEventListener('click', function () {
  list.textContent = '';
});
*/
