/* ***7*** Using a "for of" loop, create an array with 5 numbers and make a program that runs through that array and displays the double of each of the elements, in the console.

In the console it should look like this:

the number is 5 and its double is 10
the number is 7 and its double is 14
the number is 1 and its double is 2
the number is 3 and its double is 6
the number is 50 and its double is 100 */

let numbers = [15, 20, 80, 95, 72];

for (const number of numbers) {
    console.log(`the number is ${number} and it double is ${number * 2}`);
}