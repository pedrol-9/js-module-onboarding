console.log("Starting javascript...");

// Difficulty Level: Low ************************
// Starting from the following example, create a conditional block that evaluates whether the variable num1 is greater than num2, if so, print the value of num1 via the console, otherwise print num2.

let num1 = 4;
let num2 = 5;

if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2); // output: 5
}

// Based on exercise 1, now modify the block as follows:
// If num1 is greater than num2, print num1 through the console,
if (num1 > num2) {
  console.log(num2);
} else {
  console.log(num1); // output: 4
}

// if num2 is greater, print num2 and finally
if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2); // output: 5
}

// if they are equal, print a string that says “The numbers are equal”
num1 = 8;
num2 = 8;

if (num1 === num2) {
  console.log("The numbers are equal");
}

// Based on exercise 1, create a conditional block that evaluates whether these variables are equal or not, if so, print a string through the console “The numbers are equal”, otherwise “The numbers are different”.

if (num1 === num2) {
  console.log("The numbers are equal");
} else {
  console.log("The numbers are different");
}

// Starting from the following example, create a conditional block that evaluates whether one of these variables is greater than the other; if so, display “The date [variable 1] is greater than [variable 2]” by console, and, If they are the same, print “The dates are the same”
// Tip! Use backticks to print via console.

let date1 = "2018-9-2";
let date2 = "2023-7-5";
let dateComparison = date1 > date2;
// console.log(dateComparison); // output: false

if (date1 > date2) {
  console.log(`The date ${date1} is greater than the date ${date2}`);
} else if (date1 === date2) {
  console.log(`Both dates are the same`);
} else {
  console.log(`The date ${date2} is greater than the date ${date1}`);
} // Output: The date 2023-7-5 (date2) is greater than the date 2018-9-2 (date1).

date1 = new Date("2018-9-2");
date2 = new Date("2023-7-5");

if (date1.getTime() > date2.getTime()) {
  console.log(`The date ${date1} is greater than the date ${date2}`);
} else if (date1 === date2) {
  console.log(`Both dates are the same`);
} else {
  console.log(`The date ${date2} is greater than the date ${date1}`);
} // Output: The date Wed Jul 05 2023 00:00:00 GMT-0500 (hora estándar de Colombia) is greater than the date Sun Sep 02 2018 00:00:00 GMT-0500 (hora estándar de Colombia) *** So, in conclusion the date 1 is greater than the date2 because it's taking the period of time transcurred as point of correlation.

if (date1.getDate() > date2.getDate()) {
  console.log(`The date ${date1} is greater than the date ${date2}`);
} else if (date1 === date2) {
  console.log(`Both dates are the same`);
} else {
  console.log(`The date ${date2} is greater than the date ${date1}`);
} // Output: The date Wed Jul 05 2023 00:00:00 GMT-0500 (hora estándar de Colombia) is greater than the date Sun Sep 02 2018 00:00:00 GMT-0500 (hora estándar de Colombia)

// The date 2023-7-5 is greater than the date 2018-9-2

// 5. Now try changing the value of the variables. As in the previous exercises, a string must be printed through the console that says if date 1 is greater than date 2 or the opposite.

/*  Tip! Investigate how the strings compare: as a summary; the algorithm to compare two strings is simple: Compare the first character of both strings. If the first character from the first string is greater (or less) than the other string's, then the first string is greater (or less) than the second. We're done. */

date1 = "2021-8-10";
date2 = "2017-3-15";

if (date1 > date2) {
  console.log(
    `The date ${date1} (date1) is greater than the date ${date2} (date2)`
  );
} else if (date1 === date2) {
  console.log(`Both dates are the same`);
} else {
  console.log(
    `The date ${date2} (date2) is greater than the date ${date1} (date1)`
  );
} // The date 2021-8-10 (date1) is greater than the date 2017-3-15 (date2)

// if (date1.getDate() > date2.getDate()) {
//   console.log(`The date ${date1} is greater than the date ${date2}`);
// } else if (date1 === date2) {
//   console.log(`Both dates are the same`);
// } else {
//   console.log(`The date ${date2} is greater than the date ${date1}`);
// } // output should be: date2 greater than date1

//  6. In this case, create a conditional block that evaluates which of the three numbers stored in the variables is the largest. Print a string through the console that says “The number [ ] is the largest”.

let number1 = 5;
let number2 = 7;
let number3 = 9;

if (number1 > number2 && number1 > number3) {
  console.log(`The number [${number1}] is the largest`);
} else if (number2 > number1 && number2 > number3) {
  console.log(`The number [${number2}] is the largest`);
} else if (number3 > number1 && number3 > number2) {
  console.log(`The number [${number3}] is the largest`);
} else {
  console.log(`Two or more variables has the same largest value`);
}

// Difficulty Level: Medium ************************
// Using a "switch", create a program that allows you to enter these color names on the screen: red, blue or green. And print on the screen in each case:

// Tip! Don't forget the break statement

/* let color;
color = prompt("Please enter your favorite color").trim();

switch (color) {
  case "Red":
    console.log("The color of passion");
    break;
  case "Blue":
    console.log("The color of the sea.");
    break;
  case "Green":
    console.log("The color of nature");
    break;
  default:
    console.log("Sorry! There's no value for your entry");
} */

// Using a switch, create a program that allows you to enter on the screen:
// two numerical values (number from 1 to 100)
// an operation (addition, subtraction, multiplication, division)
// and print on the screen in each case:
// sum: first value + the second
// subtraction: first value - the second
// multiplication: first value * second
// division: first value / second
// With the corresponding literal ("the sum of <num1> and <num2> is...", etc.)
// Tip! Don't forget the break statement
/* let numb1 = parseInt(prompt("Enter the first number (from 1 to 100):"));
let numb2 = parseInt(prompt("Enter the first number (from 1 to 100):"));
let operation = prompt(
  "Enter the operation (addition, subtraction, multiplication, division) you'd like to do:"
);

switch (operation) {
  case "additiom":
    console.log(`sum: ${numb1} + ${numb2} = ${numb1 + numb2}`);
    break;
  case "substraction":
    console.log(`substraction: ${numb1} - ${numb2} = ${numb1 - numb2}`);
    break;
  case "multiplication":
    console.log(`product: ${numb1} * ${numb2} = ${numb1 * numb2}`);
    break;
  case "division":
    console.log(`division: ${numb1} / ${numb2} = ${numb1 / numb2}`);
    break;
  default:
    console.log("default");
}
 */
// Starting from the following structure, create a conditional block that
// receives 2 objects representing people with the properties: name, age, height
// and print by console in the same console.log:
// Which of the two people is the taller?
// Which is the oldest?
// Tip! You can use nested if or logical operators.
let person1 = {
  personName: "Juan",
  age: 39,
  height: 1.69,
};

let person2 = {
  personName: "Pepito",
  age: 42,
  height: 1.65,
};

/* let olderPerson = person1.age > person2.age;
console.log(typeof olderPerson); // Output:
console.log(olderPerson); // Output: */
// ${}
if (person1.age > person2.age && person1.height > person2.height) {
  console.log(
    `${person1.personName} (person1) is older than ${person2.personName} (person2), as well as the tallest one.`
  );
} else if (person2.age > person1.age && person2.height > person1.height) {
  console.log(
    `${person2.personName} (person2) is older than ${person1.personName} (person1), as well as the tallest one.`
  );
} else if (person1.age > person2.age && person2.height > person1.height) {
  console.log(
    `${person1.personName} (person1) is older than ${person2.personName} (person2), but also the tiniest.`
  );
} else if (person2.age > person1.age && person1.height > person2.height) {
  console.log(
    `${person2.personName} (person2) is older than ${person1.personName} (person1), but also the tiniest.`
  );
} else {
  console(`seems both people look alike`);
} // output: Pepito (person2) is older than Juan (person1), but also the tiniest.

// Create a program that allows you to enter on the screen:
// your name, age, height and vision.
// and print through the console a string “You are qualified to drive”,
// For this the person must:
// Be at least 18 years old.
// Measure more than 110 cm.
// Have a vision of at least 8 out of 10.
// Tip! Remember prompt( ) to enter data on the screen.
/* let userName = prompt("enter your name");
let userAge = parseInt(prompt("enter your age"));
let userHeight = parseInt(prompt("enter your height in cms"));
let userVisionQuality = prompt("qualify your vision from 1 to 10");

let userInputsValidation =
  userAge >= 18 && userHeight >= 110 && userVisionQuality >= 8; // typeof: boolean.

if (userInputsValidation) {
  console.log(`Congrats ${userName}! You are qualified to drive`);
} else {
  console.log(`Sorry ${userName}! You're not eligible to get the driver pass`);
}
 */

// Create a program that allows you to enter your age on the screen and print it on the screen if you are:
// infant (0 to 12 years)
// adolescent (13 to 18 years old)
// older young (19 to 45 years)
// elderly (over 45 years)
// Is he really that old? (more than 100 show)
// Tip! Remember alert( ) to display data on the screen.
/* let userAge = parseInt(prompt("please enter your age"));

if (userAge <= 12) {
  alert("infant");
} else if (userAge > 12 && userAge <= 18) {
  alert("adolescent");
} else if (userAge > 18 && userAge <= 45) {
  alert("older young");
} else if (userAge > 45 && userAge <= 100) {
  alert("elderly");
} else {
  alert("are you really that old?");
} */

// Create a program that allows you to enter only numbers from 1 to 3 on the screen and then any other numerical data. Print on screen:
// 1: “The number entered is [ ]”
// 2: “Twice the number entered is [ ]”
// 3: “Three times the number entered is [ ]”
// another: “That value is not allowed”
// Tip! Remember alert( ) to display data on the screen.

let userNumber = parseFloat(prompt("please enter a number from 1 to 3"));
let userInputVal =
  !isNaN(userNumber) &&
  Number.isInteger(userNumber) &&
  userNumber >= 1 &&
  userNumber <= 3;

if (userInputVal) {
  alert(`The number entered is [${userNumber}]`);
  alert(`Twice the number entered is [${userNumber * 2}]`);
  alert(`Three times the number entered is [${userNumber * 3}]`);
} else {
  alert("That value is not allowed");
}

/* *** Explicación de la expresión: !isNaN(userNumber) && Number.isInteger(userNumber) ***

!isNaN(num): isNaN() es una función en JavaScript que se utiliza para verificar si un valor no es un número. Devuelve true si el valor proporcionado no es un número, de lo contrario devuelve false. Sin embargo, el operador ! antes de isNaN(num) invierte este resultado. Entonces, !isNaN(num) devuelve true si num es un número válido y false si no lo es.

Number.isInteger(num): Number.isInteger() es un método estático del objeto Number en JavaScript. Se utiliza para determinar si un valor dado es un número entero. Devuelve true si el valor pasado como argumento es un número entero, de lo contrario, devuelve false.

num: Es el valor que se está evaluando para determinar si es un número entero. */

// Create a program that allows the following data to be entered on the screen:
let customer = prompt("enter your name");
let custPass = confirm("You're a VIP customer, is this true?");
// Customer name, Pass (vip or normal), Entrance (yes or no).
// People who have your name ==> show a welcome message
// or VIP pass ==> show a welcome message
// If you have a ticket, ask if you want to use it
// If affirmative ==> show a welcome message
// If negative ==> show farewell message
// And finally in case of not having the same name or VIP pass or entry, ask "do you want to buy?". And in case:
// negative ==> show farewell message
// affirmative ==> ask for available money, in case:
// More than 1000 ==> show a successful sale and welcome message
// Less than 1000 ==> show sales rejection message
