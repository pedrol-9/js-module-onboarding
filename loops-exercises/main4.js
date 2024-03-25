/* ***4*** Using now a "do while" loop and following the same instructions as the previous exercise, display in the console, the value of the variable that accumulates the sum of the numbers entered.

Suppose you entered 1 then 3 then 0. This would be the result: 4
Tip! use backticks for this. */

let userNumbers
console.log(userNumbers) // Comprobar tipo de dato cuando se pica en cancelar = NaN.

/* DUDA EXISTENCIAL: porqué aún  NO cumple con la condición dada, se sigue ejecutando? Ni siquiera con un if que rompa cuando se den esas condiciones */
do {
    let userNumbers = parseInt(prompt("Inserte números aleatorios y asegúrese de ingresar un 0 en algún momento"))
    sum += userNumbers
    console.clear()
    console.log("la suma de los números ingresados es:" + sum)

    if (userNumbers === 0 || userNumbers == NaN) {
        break;
    } // no se cumplen las condiciones
} while (userNumbers != 0) // no se cumple la condición falsa

/* NOTAS PARA TENER ENCUENTA SOBRE EL DO-WHILE LOOP: 
En un bucle do...while, la condición se evalúa después de ejecutar el bloque de código dentro del do. Si el bloque de código se ejecuta al menos una vez y luego la condición se evalúa como falsa, el bucle se detiene. Esto significa que, si la condición del bucle se vuelve falsa en algún momento, el bucle terminará, independientemente de si hay un if dentro del bloque de código del do.

El propósito del if dentro del bucle sería para manejar casos específicos donde necesitas salir del bucle antes de que la condición del bucle se vuelva falsa. Por ejemplo, si tienes un bucle que necesita ejecutarse hasta que el usuario ingrese un valor específico, pero también quieres que el usuario tenga la opción de salir del bucle en cualquier momento, puedes usar un if para verificar si el usuario ha ingresado ese valor específico y salir del bucle en ese caso. Esto sería una condición adicional a la condición del bucle do...while.   */

