/*
//UNDERVISNING

//Flat Array
1. Vi lager en array og console log det som er i array
2. Vi lager et element i HTML som vi kan putte array element inn i
3. Vi går gjennom stegene for å få teksten ut på siden
4. Vi ser på måter å få hele array ut som liste, hvordan vi kan få lengden på array og hvordan vi kan få tak i siste element i array
*/

/*
// OPPGAVE 1
1.Lag et array med dine favoritter innen et tema, musikk, tv, film, bøker etc, eventuelt et enkelt array av et emne, frukt, handlevarer, bilmerker etc
2. console.log de forskjellige elementene i arrayet
3. lag et nytt <p> element og legg til en av elementene fra array i <p>
4. legg til <p> til i HTML slik at det er synlig i browser
/*

/*
// UNDERVISNING
//Objects og array av objects
1. Vi lager et object for en person, navn, alder, erTilstede og console log det som er i object
2. Hvordan console.log objects
3. Array av objects
4. Objects of array
4. Hvordan vi console.log det

Oppgave 2

1. lag et object for 
*/

/*
Oppgave 3
Se på array av objects som heter fontenehus
1. console.log navnet på det 4. huset i array
2. console.log adressen til Fontenehuset Oslo Øst 
3. legg til Fontenehuset Bærum i objektet

Fontenehuset Bærum
Industriveien 2, 1337 Sandvika
https://www.fontenehuset-baerum.no/ 

4. lag en a link i HTML med en href som inneholder nettsiden til Fontenehuset Oslo Sentrum

5. Oppdater objectet med ny key som inneholder verdier for antall medlemmer, bruk oppdiktet tall,

forslag til tall:
500, 200, 120, 230

6. legg til et nytt fontenehus

https://fontenehuset-mortensrud.no/,

legg til navn, adresse, nettside, avdelinger- dikte opp, antall medlemmer- dikte opp

console.log den nye avdelingen avdeling
*/

/*
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
