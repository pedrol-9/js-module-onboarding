/* ***5*** Using a "for of" loop, create an array of strings with colors and print each of the colors included in the array through the console.
In the console it should look like this (for example):

Red, Green, Blue, Violet, Brown, Black, White */

const colors = ["Red", "Green", "Blue", "Violet", "Brown", "Black", "White"];

/* for (let index = 0; index < colors.length; index++) {
    console.log(colors[index]);
} */

for (const iterator of colors) {
    console.log(iterator);
} // a diferencia del for, el forOf estandariza el begin y el step; la condición también está estandariza a siempre iterar sobre el 100% de los elementos de un array o cualquien objeto o dato iterable. En ese orden de ideas, no se necesita indicarle que me traiga el valor de tal array dentro del console.log(); ya que eso se indicó como argumento del loop.

/* ***6*** Now take the loop from the previous exercise as a reference and place it inside a function so that it performs the same task but can be reused as many times as necessary without having to rewrite the loop code. */

function printColors() {
    for (const iterator of colors) {
        console.log(iterator);
    }
}

// printColors();