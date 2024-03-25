/* ***2*** Using the loop that you consider as correct, create a program that receives a number through a prompt and displays all its divisors (dividers) through the console.

Tip: DIVISORS/DIVIDERS: are all natural numbers that exactly divide another natural number. Example: “The divisors of '15' are: 1, 3, 5 and 15. (The division of '15' between any of these numbers is exact)

Suppose 50 was entered. This would be the result 50, 25, 10, 5, 2, 1
Tip! remember or investigate the operator % */

let userInput = parseInt(prompt("Inserte un número del 1 al 100 por favor"));

console.log(userInput);


// Loop through numbers from 1 to the number itself
for (let i = 1; i <= userInput; i++) {
    // Check if i is a divisor of the number
    if (userInput % i === 0) {
        console.log(`Divisors of your number ${userInput} are: ${i}`);
    }
} // no solo itera arrays, y no solo los arrays son iterables, en este caso, el userInput no es un array, el for loop tomaría emprezaría a iterar desde 1 hasta el mismo valor de sí mismo y con el control flow saco los divisores exactos. 



