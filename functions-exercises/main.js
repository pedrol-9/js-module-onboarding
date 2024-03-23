// Difficulty Level: Low ******************
// Declaring functions
// This first exercise is for learning how to declare a function. In this case you must declare a named function called "add" that within its body, must execute an instruction that displays the result of 100 x 20 in the console.

function add() {
   console.log(100 * 20);
}

// Calling/executing functions.
// We already have the declaration, the next step is to call/execute the "add" function. Execute it and check that the result is displayed in the console.

add();

// Adding parameters.
// Now it's time to add parameters to our function. Add two parameters and call them whatever you want. Remember to indicate within the body of the function where those parameters will go.

function add1(a, b) {
   console.log(a * b);
}

// Using arguments.
// We have already added parameters to the declaration of our function, the next step is to "pass it arguments". To do this,  create two variables like the following in the example:
let number1 = 100;
let number2 = 20;

add1(number1, number2);

// Adding the <return>.
// With our named function set up correctly, it's time to change the console.log of the function body. Create a result variable inside the function body that will store the result of 100 x 20, and have the function returns that variable.
function add2(a, b) {
   const result = a * b;
   return result;
}

const resultado = add2(number1, number2);
console.log(resultado);

// Convert the named function from the previous exercise into an anonymous function and call/execute it.

const add3 = function (a, b) {
   return a * b;
}

const resultado1 = add3(number1, number2);
console.log(resultado1); // 2000

// Difficulty Level: Medium ******************
// Create a named function called "greet" that
// receives a string parameter representing a name, and
// displays a custom greeting using the provided name in the console.
// Call/run the function with your own name to verify that it works correctly.
function greet(name) {
   console.log(name);
}

greet("Pedro"); // Pedro

// Create an anonymous function that
// receives two numerical parameters and
// returns the result of the multiplication of both.
// Calls/executes the function with two different values and displays the result via console.
const multiplication = function (c, d) {
   return c * d;
}

const product = multiplication(5, 9);
console.log(product); // 45

// Create a named function called "area" that
// receives two numerical parameters, one representing the base and the other the height of a triangle.
// return its area.
function area(height, base) {
   return (height * base) / 2;
}

const triangleArea = area(25, 40);
console.log(triangleArea); // 500

// Create another named function called "perimeter" that
// receives three numerical parameters that represent each of the sides of a triangle, and
// returns the perimeter of the triangle.
// Tip! Remember the formulas for area and perimeter of triangles.
function perimeter(side1, side2, side3) {
   return side1 + side2 + side3;
}

const trianglePerimeter = perimeter(15, 12, 10);
console.log(trianglePerimeter); // 37

/* Create a function that
takes two numerical parameters representing the price and quantity of a product,
and returns the total price of the purchase.
If the number of products is greater than or equal to 10, ==> a 10% discount applies to the total price.
If the number of products is greater than or equal to 20, ==> a 20% discount applies to the total price.
Call/run the function with different price and quantity values to verify it works correctly */
function calculateTotalPrice(price, quantity) {
   let totalPaid = price * quantity;

   if (price >= 10 && price < 20) {
      totalPaid = (price * quantity) / 1.10;
   } else if (price >= 20) {
      totalPaid = (price * quantity) / 1.20;
   }

   return totalPaid;
}

const totalPurchase = calculateTotalPrice(22, 150);
console.log(totalPurchase); // 2750

/* Create a named function called isAnAdult that
receives a numeric parameter representing the age of a person, and
returns a message indicating whether the person is an Adult or not.
If Age is greater than or equal to 18 "You are an adult"
If Age is less than 18 "You are not an adult"
Call the function with different age values to verify that it works correctly.
Call the function with different age values to verify that it works correctly. */

function isAnAdult(personAge) {
   if (personAge >= 18) {
      return "You are an adult";
   } else {
      return "You are not an adult";
   }
}

let test = isAnAdult(12);
console.log(test); // not an adult

test = isAnAdult(35);
console.log(test); // an adult

test = isAnAdult(-1);
console.log(test); // not an adult

/* Difficulty Level: High ******************
Create a function (declare it as you want) that
takes a numerical parameter that represents a person's annual income, and
returns the tax they must pay.
If Income less than or equal to $10,000, ==> tax of 10% of income.
If Income greater than $10,000 and less than or equal to $20,000, ==> tax of 15% of income.
If Income greater than $20,000, ==> tax of 20% of income.
Use nested conditionals to implement this function.
Call/execute the function with different input values to verify that it works correctly. */
const calculateTaxes = function (anualIncome) {
   if (anualIncome <= 10000) {
      return `taxes of 10% ${anualIncome * .10}`;
   } else if (anualIncome > 10000) {
      if (anualIncome <= 20000) {
         return `taxes of 15% ${anualIncome * .15}`;
      } else if (anualIncome > 20000) {
         return `taxes of 20% ${anualIncome * .20}`;
      }
   }
}

let taxes = calculateTaxes(55000);
console.log(taxes); // taxes of 20% 11000

/* // Create a function (declare it as you want) to check for a day that
// receives a numerical parameter and
// returns a message indicating whether it is a business day or not.
// If the number is 1, 2, 3, 4, 5, message: "It is a business day."
// If the number is 6 or 7, message: "It's the weekend."
// Use the nested switch control structure to implement this function.
// Call the function with different day values to verify that it works correctly. */

function businessDay(day) {
   switch (day) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
         return "It is a business day";
         break;
      case 6:
      case 7:
         return "It is weekend";
         break;
      default:
         return "default";
         break;
   }
}

let determineDay = businessDay(2);
console.log(determineDay);

/* Create a program using a function (declare it as you want) that takes a parameter that represents Personal Information (enter by keyboard).
First the Name must be entered, and if it comes empty ==> the program must stop and display a console.error with a message “The name cannot be empty” 
Then the user must be asked to enter the Last Name and it must be validated as the Name in previous step.
Finally, the user must be asked to enter the age and it must be validated too.
Once all the data were verified, the function must save all that data in an object with 3 properties: first name, last name and age and display it through the console.
To finish, the function must be called/executed and tested with different values. */
let userInformation = {};

function personalInfo() {
   let userName = prompt("type down your name");
   if (userName == "") {
      console.error("The name cannot be empty");
   } else {
      userInformation.name = userName;
   }

   let userLName = prompt("type down your last name");
   if (userLName == "") {
      console.error("The last name cannot be empty");
   } else {
      userInformation.lastName = userLName;
   }

   let userAge = prompt("type down your age");
   if (userAge == "") {
      console.error("The age cannot be empty");
   } else {
      userInformation.age = parseInt(userAge);
   }

   console.table(userInformation);
}

personalInfo();

/* Create a program that is made up of 3 functions (declare them as you want):
1st greet function: that takes a parameter that represents a name and returns a string “Hello, my name is [ parameter ]”
2nd function: calculateAge: which takes two parameters that represent the year of birth and the current year. This function will return the result of the current year minus the year of birth.
3rd function: present: call/execute the other two functions and execute an alert with the user's presentation
The user's data must be entered on the screen and the final result also displayed on the screen */
function greet(userName) {
   return `Hello, my name is [${userName}]`;
}

function calculateUserAge(dateOfBirth, currentYear) {
   return currentYear - dateOfBirth;
}

function present() {
   let greeting = greet("Pedro");
   let age = calculateUserAge(1997, 2024);

   alert(`${greeting} and I am [${age}] years old.`);
}

present();

