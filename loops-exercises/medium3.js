/* ***3*** Taking into account the ringing Bell function, create a loop (the one you consider) that displays a string through the console that in turn concatenates the string that the function returns as many times as the number that the user enters on the keyboard.

For example, if the user enters the number 5, the result should be:
Ding Dong, Ding Dong, Ding Dong, Ding Dong, Ding Dong

*/

function RingBell() {
    console.log("Ding Dong");
    return "Ding Dong";
}

let dinDong = "";
let userInput = parseInt(prompt("inserte un número del 1 al 10"));


for (let i = 1; i <= userInput; i++) {
    dinDong += "Ding Dong" + RingBell();
}