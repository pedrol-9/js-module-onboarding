/* ***2*** Using a "for" loop, make a program that allows the entry of a number through a prompt between 1 and 10, and displays through the console it multiplication table (the first 10 multiples only).
Suppose the number entered is 5. This would be the result:

1x5=5
2x5=10
3x5=15
4x5=20
5x5=25
6x5=30
7x5=35
8x5=40
9x5=45
10x5=50 */

let userInput = parseInt(prompt("Inserte un número del 1 al 10"))

if (userInput >= 1 && userInput <= 10) {
    for (let index = 0; index <= 9; index++) {
        // el array del prompt tiene 10 posiciones que van desde el index 0, hasta el 9, para poder multiplicar empezando desde 1 y no desde cero: (index + 1).
        let indicador = index + 1;
        console.log(`${indicador}X${userInput}= ${indicador * userInput}`)
    }
} else {
    console.log("Please, enter a valid number")
}
