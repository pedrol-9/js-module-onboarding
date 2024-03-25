/* ***1*** Using the loop that you consider, we are going to use the variable that stored the sum of the numbers in exercise #3 as a "secret number". The new program will allow numbers to be entered through a prompt until the number entered is equal to the one saved in the variable of exercise #3.

If the value entered is greater than the "secret" number, notify the user through the console ("the number entered is greater than the secret", the same if the value is less.

So on until the user guesses the secret number. Finally, show a congratulatory message on the screen and tell you how many attempts you have made ("You got it right! The secret number was <number> and you made <x> attempts" */

let secretNumb = 23;
let userNumbers;
let suma = 0;
let attemptsContainer = [];

function printResta() {
    attemptsContainer.push(userNumbers);
    console.clear();
    console.table(attemptsContainer);
    console.log(`Su suma (${suma}) es mayor que el número secreto, disminuzca su valor`);
}

function printSuma() {
    attemptsContainer.push(userNumbers);
    console.clear();
    console.table(attemptsContainer);
    console.log(`Su suma (${suma}) es menor que el número secreto, aumente su valor`);
}

function congratsClosure() {
    console.clear();
    console.table(attemptsContainer);
    console.log(`Adivinaste el número secreto ${secretNumb}, lo intentaste ${attemptsContainer.length} veces, una marca insuperable.  ¡Felicidades!`);
}

while (userNumbers != 0) {
    userNumbers = parseInt(prompt("Inserte números aleatorios, que se sumarán o se restarán, según corresponda, hasta que adivine el número secreto. Si quiere rendirse ingrese el número 0."));

    if (userNumbers == 0) {
        console.log(`Gracias por participar!`);
    } else if (suma > secretNumb) {
        suma = suma - userNumbers;
    } else if (suma < secretNumb) {
        suma = userNumbers + suma;
    }

    // DUDA EXISTENCIAL, por qué no se ejecutan las funciones dentro del primer control flow?

    if (suma > secretNumb) {
        printResta();
    } else if (suma < secretNumb) {
        printSuma();
    } else if (suma === secretNumb) {
        congratsClosure();
        break;
    }
} // pasa lo mismo