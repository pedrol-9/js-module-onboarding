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

let beerClasifier = array => {
    let mostAlcoholicBeers = array.sort((a, b) => b.abv - a.abv).slice(0, 10);
    return mostAlcoholicBeers;
}

console.log(beerClasifier(beers));

console.log("*************PUNTO #5 **************");
// **5. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 least bitter beers.

/* function bitterBeerClasifier(array) {
    let leastAlcoholicBeers = array.sort((a, b) => a.abv - b.abv).slice(0, 10);
    return leastAlcoholicBeers;
} */

let bitterBeerClasifier = array => {
    let leastAlcoholicBeers = array.sort((a, b) => a.abv - b.abv).slice(0, 10);
    return leastAlcoholicBeers;
}

console.log(bitterBeerClasifier(beers));

console.log("*************PUNTO #6 **************");
// **6. Generate a function that receives as parameters an array of beers and a name of a beer. The function should return the complete object that matches the name entered.

let beer = "Mixtape 8"; // undefined, si no está.

let beerFinder = (array, beerName) => array.find(element => element.name === beerName);
console.log(beerFinder(beers, beer));

console.log("*************PUNTO #7 **************");
// **7. Generate a function that receives as a parameter an array of beers, a value and that returns the first object whose ibu property is equal to the entered value, in case there is no beer with that ibu that displays a message in the console that says “ There is no beer with an ibu of (value entered).”

// forma menos pro
/* let ibuFinder = (array, ibu) => {
    let auxiliar = array.find(object => object.ibu === ibu)
    if (auxiliar != undefined) {
        return auxiliar
    }
    // ? object : `There is no beer with an ibu of ${ibu}`);
    return `There is no beer with an ibu of ${ibu}`
} */


// forma pro max
let ibuFinder = (array, value) => {
    let auxiliar = array.find(object => object.ibu === value);
    return auxiliar != undefined ? auxiliar : `There is no beer with an ibu of ${value}`;
}

console.log(ibuFinder(beers, 70));

console.log("*************PUNTO #8 **************");
// Generate a function that receives the name of a beer as a parameter and returns the position in the array of that beer. If the beer is not found, a message must be printed through the console saying “(Name of the beer entered) does not exist.”

let indexOfBeer = (array, beerName) => {
    let auxiliar = array.findIndex(object => object.name == beerName);
    return auxiliar != undefined ? auxiliar : `${beerName} does not exist`;
}

console.log(indexOfBeer(beers, beer));

console.log("*************PUNTO #9 **************");
// **9. Generate a function that receives as a parameter the array of beers and an alcohol value. The function must return a new array with the beers that do not exceed the alcohol level. Each element of the new array must be an object that has the properties name, alcohol (abv) and "bitterness" (ibu)

let selectedBeers = (array, value) => {
    let auxiliar = array.filter(element => element.abv <= value).map(element => {
        return {
            name: element.name,
            abv: element.abv,
            ibu: element.ibu
        };
    })

    // console.log(auxiliar);
    return auxiliar;
}

console.log(selectedBeers(beers, 6.5));

console.log("*************PUNTO #10 **************");
// 10. Generate a function that receives as parameters an array of beers, a property name and a boolean value. It should return a new array with 10 beers ordered by the property entered as the second argument, ascending if the third is true or descending if it is false.

let funcion = (array, property, boolean) => {
    let newArray = array.toSorted((a, b) => {
        return boolean ? a[property] - b[property] : b[property] - a[property];
    }).slice(0, 10);
    return newArray;
};

console.log(funcion(beers, "ph", false));

/* SE PUEDE ACCEDER A LAS PROPIEDADES DE UN OBJETO EN JS CON CORCHETES?? 

Sí, en JavaScript también puedes acceder a las propiedades de un objeto utilizando corchetes. Esta técnica es útil cuando el nombre de la propiedad está contenido en una variable o cuando el nombre de la propiedad incluye caracteres que no son válidos para ser utilizados directamente en la notación de punto.

let objeto = { name: "pedro", apellido: "sanabria", edad: 26 }
// console.log(objeto[apellido]); no accede, pero si la propiedad en sí se contiene en una variable, entonces sí se puede: 

const apellido = "apellido";
console.log(objeto[apellido]); */

console.log("*************PUNTO #11 **************");
// **11. Generate a function that receives as a parameter an array of beers and an id of an HTML element where the table will be printed. The function must render (render, draw, paint, fill, etc.) in an html file a table that contains the columns "Name", "ABV", "IBU", and one row for each element of the array. Each row must have the data requested for each of the beers.

let createAndPrintCards = (array, id) => {
    let tableHTML = document.getElementById(id);

    let createTableContent = objeto => {
        return `
            <td class="border-2 border-white-900 border-dashed px-3.5">${objeto.name}</td>
            <td class="border-2 border-white-900 border-dashed px-3.5">${objeto.abv}</td>
            <td class="border-2 border-white-900 border-dashed px-3.5">${objeto.ibu}</td>
        `
    }

    let fragment = new DocumentFragment();

    for (const iterator of array) {
        let tableRow = document.createElement("tr");
        tableRow.className = "bg-indigo-300 text-center";
        tableRow.innerHTML = createTableContent(iterator);
        fragment.appendChild(tableRow);
    }

    tableHTML.appendChild(fragment);
}

console.log(createAndPrintCards(beers, "table-body"));