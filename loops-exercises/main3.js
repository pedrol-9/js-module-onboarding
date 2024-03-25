/* ***3*** Using a "while" loop, create a program that allows the entry of numbers through a prompt. The numbers must be added (acumulated) into a resulting variable. The entry of numbers will end when the user enters a 0. At the end, display the value of the sum variable through console.

Suppose you entered 1 then 3 then 0. This would be the result: 4.
Tip! Be careful, remember that the promt returns a string. */

// let numbersArray = []
let userNumbers = parseInt(prompt("Inserte números aleatorios y asegúrese de ingresar un 0 en algún momento"))
let sum = 0;
console.log(userNumbers != 0); // comprobando!

while (userNumbers != 0) {
    sum += userNumbers;
    // += es el operador de asignación de adición compuesto. Añade el valor de la expresión del lado derecho (userNumbers) al valor de la variable del lado izquierdo (sum), y luego asigna el resultado de vuelta a la variable sum.
    userNumbers = parseInt(prompt("Inserte números aleatorios y asegúrese de ingresar un 0 en algún momento"));
    // numbersArray.push(userNumbers)
    console.clear();
    // console.table(numbersArray)
    console.log("la suma de los números ingresados es:" + sum);
} // ****** cómo salir del bucle picando en cancelar? *********

// console.log("la suma de los números ingresados es:" + sum)

