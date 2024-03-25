console.log("Starting javascript...");

/* ***1*** Using a "for" loop, create a program that allows the entry of a number between 1 and 100 through a prompt, Then it prints through the console all the numbers that are between the entered number and 0 (that is, in descending order ).
Let's assume that the number entered is 5. This would be the result: 5, 4, 3, 2, 1, 0 */

// const array = [];
const numbers = parseInt(prompt("Ingrese un número del 1 al 100"));

if (numbers >= 1 && numbers <= 100) {
    for (let index = numbers; index >= 0; index--) {
        // index >= 0, porque permite que se itere siempre que index sea mayor o igual que cero, así, cuando llegue a cero, se rompe.
        console.log(index);
    }
} else {
    console.log("Please, enter a valid number");
}






