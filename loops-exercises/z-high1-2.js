/* Using the loop that you consider, create a program that allows the entry of numbers on the screen through a prompt and calculates the sum of the even numbers on the one hand and the odd numbers on the other. The data entry ends when the user enters a 0. In the console it should look like this (for example):

Even number: 38
Odd numbers 30 */

let userInput = parseInt(prompt("Ingrese el número que se te cante"));
// let sum = 0;
let evenNumSum = 0;
let oddNumSum = 0;
// console.log(userInput % 2 === 0); // comprobación.

function printSum() {
    console.clear();
    console.log(`your even numbers sum is: ${evenNumSum}`);
    console.log(`your odd numbers sum is: ${oddNumSum}`);
}

while (userInput !== 0) {
    if (userInput % 2 === 0) {
        // evenNumSum = userInput + evenNumSum;
        evenNumSum += userInput;
        printSum();
        userInput = parseInt(prompt("Ingrese el número que se te cante"));
    } else if (userInput % 2 === 1) {
        // oddNumSum = userInput + evenNumSum;
        oddNumSum += userInput;
        printSum();
        userInput = parseInt(prompt("Ingrese el número que se te cante"));
    } else {
        userInput = 0; // por fin funcionóooooooooo la tecla cancelar
    }
}

console.log("*************************")
/* ***2*** Using the loop that you think is correct, create an array of 10 numbers and make a program that prints the largest number in the array, on the screen. */

let numbers = [1540, 8526, 96584, 416513, 57156, 89456313, 4521, 635213, 8742425, 68435];

let biggerNumber = numbers[5]; // agarro un número en cualquier posición y lo comparo con el resto de los números. 

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggerNumber) {
        biggerNumber = numbers[i];
    }
    console.log(`The largest number within the array is: ${biggerNumber}`); // Era el mismo: The largest number within the array is: 89456313.
}