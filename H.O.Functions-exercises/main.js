// **1 Convert the following named function to an arrow function:

/* function printMessage( message ) {
    console.log( message )
} */

const printMessage = message => { console.log(message) }
printMessage("Hola Mundo!"); // Hola Mundo!

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

console.log("***************************");
// **3. Starting from an array: const array = [ 1,2,3,4,5,6,7,8,9 ], apply a map to that array and pass as an argument the named function shown in the previous exercise. Show by console the new array obtained.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const mapOfArray = array.map(createMultplication);
console.log(mapOfArray); // [0, 2, 6, 12, 20, 30, 42, 56, 72] parece que toma el index como argumento y multiplica. 

// si la named function se declaró con parámetros y paso la función como argumento, no tendría que ponerle argumentos a esa función?

console.log("***************************");
// **4. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 most alcoholic beers.

let beers = ["Estella Artois", "Aguila", "Polar", "Quilmes", "Club colombia", "Budweiser", "Heineken", "Poker", "Patagonia", "Sol"]

function alcoholBeerClasifier(array) {
    let alcoholicBeers = array.map(beer => { console.log(`${beer} es una de las cervezas con mayor grado de alcohol`) })
    return alcoholicBeers;
}

let alcoholicBeers = alcoholBeerClasifier(beers); // Capturo el valor retornado. Se inicializa por tanto se ejecuta, no necesito darle otro console.log

console.log("***************************");
alcoholBeerClasifier(beers); // Llamo a la función, el retorno de la función no se captura, solo se ejecuta en la consola.

console.log("***************************");
// **5. Generate a function that receives an array of beers as a parameter and returns a new array with the 10 least bitter beers.

function bitterBeerClasifier(array) {
    let alcoholicBeers = array.map(beer => { console.log(`${beer} es una de las cervezas menos amargas`) })
    return alcoholicBeers;
}

let leastBitterBeers = bitterBeerClasifier(beers);

console.log("***************************");
// **6. Generate a function that receives as parameters an array of beers and a name of a beer. The function should return the complete object that matches the name entered.

