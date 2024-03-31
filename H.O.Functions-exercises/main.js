console.log("*************PUNTO #1 **************");
// **1 Convert the following named function to an arrow function:

/* function printMessage( message ) {
    console.log( message )
} */

const printMessage = message => { console.log(message) }
printMessage("Hola Mundo!"); // Hola Mundo!

console.log("*************PUNTO #2 **************");
// **2 Convert the following named function to an arrow function:

/* function createMultplication (number1, number2) {
    let result = number1 * number2
    return result
} */

const createMultplication = (number1, number2) => {
    let result = number1 * number2
    return result
}
createMultplication();

console.log("*************PUNTO #3 **************");
// **3. Starting from an array: const array = [ 1,2,3,4,5,6,7,8,9 ], apply a map to that array and pass as an argument the named function shown in the previous exercise. Show by console the new array obtained.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const mapOfArray = array.map(createMultplication);
console.log(mapOfArray); // [0, 2, 6, 12, 20, 30, 42, 56, 72] parece que toma el index como argumento y multiplica. 

// si la named function se declaró con parámetros y paso la función como argumento, no tendría que ponerle argumentos a esa función?

console.log("*************PUNTO #4 **************");
// **4. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 most alcoholic beers.

/* let beersMap = []; // copia del arreglo feo que no se entiende nada.
beers.map(element => beersMap.push(element));
console.log(beersMap); */

function beerClasifier(array) {
    let mostAlcoholicBeers = array.sort((a, b) => b.abv - a.abv).slice(0, 10);
    console.log(mostAlcoholicBeers);
}

beerClasifier(beers);

console.log("*************PUNTO #5 **************");
// **5. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 least bitter beers.

function bitterBeerClasifier(array) {
    let leastAlcoholicBeers = array.sort((a, b) => a.abv - b.abv).slice(0, 10);
    console.log(leastAlcoholicBeers);
}

bitterBeerClasifier(beers);

console.log("*************PUNTO #6 **************");
// **6. Generate a function that receives as parameters an array of beers and a name of a beer. The function should return the complete object that matches the name entered.

let beer = "Buzz"; // undefined, si no está.

let beerFinder = beers.find(element => element.name === beer);
console.log(beerFinder);

console.log("*************PUNTO #7 **************");
// **7. Generate a function that receives as a parameter an array of beers, a value and that returns the first object whose ibu property is equal to the entered value, in case there is no beer with that ibu that displays a message in the console that says “ There is no beer with an ibu of (value entered).”

let ibu = 41.5;

let ibuFinder = beers.find((element) => element.ibu === ibu);
if (ibuFinder) {
    console.log(ibuFinder);
} else {
    console.log(`There is no beer with an ibu of (${ibu}).`);
}

console.log("*************PUNTO #8 **************");
// Generate a function that receives the name of a beer as a parameter and returns the position in the array of that beer. If the beer is not found, a message must be printed through the console saying “(Name of the beer entered) does not exist.”

let indexOfBeer = beers.findIndex(element => element.name == beer);
console.log(indexOfBeer);

if (indexOfBeer !== -1) {
    console.log(`${beer} is in the position ${indexOfBeer}`);
} else {
    console.log(`${beer} does not exist`);
}

console.log("*************PUNTO #9 **************");
// **9. Generate a function that receives as a parameter the array of beers and an alcohol value. The function must return a new array with the beers that do not exceed the alcohol level. Each element of the new array must be an object that has the properties name, alcohol (abv) and "bitterness" (ibu)

let alcoholLevel = 7.5;
let selectedBeers = beers.filter(element => element.abv <= alcoholLevel);
let createNewArray = selectedBeers.map(element => {
    return {
        name: element.name,
        abv: element.abv,
        ibu: element.ibu
    };
})

console.log(createNewArray);

console.log("*************PUNTO #10 **************");
// 10. Generate a function that receives as parameters an array of beers, a property name and a boolean value. It should return a new array with 10 beers ordered by the property entered as the second argument, ascending if the third is true or descending if it is false.

let arreglo = beers;
// let property = beer.ph;
let boolean = false;

let newArrayOrderedByProperty = arreglo.toSorted((a, b) => {
    if (boolean) {
        return a.ph - b.ph; // orden ascendiente
    } else {
        return b.ph - a.ph; // orden descendiente
    }
})

// console.log(newArrayOrderedByProperty); // arroja un array dependiendo de si es false o true

nuevoArregloConSlice = newArrayOrderedByProperty.slice(0, 10); // Es un nuevo array con solo 10 elementos ordenados de acuerdo al booleano.
console.log(nuevoArregloConSlice);

console.log("*************PUNTO #11 **************");
// **11. Generate a function that receives as a parameter an array of beers and an id of an HTML element where the table will be printed. The function must render (render, draw, paint, fill, etc.) in an html file a table that contains the columns "Name", "ABV", "IBU", and one row for each element of the array. Each row must have the data requested for each of the beers.

let tableHTML = document.querySelector("#table-body");

let createTableContent = objeto => {
    return `
        <td class="border-2 border-white-900 border-dashed px-3.5">${objeto.name}</td>
        <td class="border-2 border-white-900 border-dashed px-3.5">${objeto.abv}</td>
        <td class="border-2 border-white-900 border-dashed px-3.5">${objeto.ibu}</td>`
}

let fragment = new DocumentFragment();

for (const iterator of beers) {
    let tableRow = document.createElement("tr");
    tableRow.className = "bg-indigo-300 text-center";
    tableRow.innerHTML = createTableContent(iterator);
    fragment.appendChild(tableRow);
}

// console.log(fragment.textContent);
tableHTML.appendChild(fragment);