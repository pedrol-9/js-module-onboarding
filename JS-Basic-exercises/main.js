console.log("Starting javascript...");

// Difficulty Level: Low **********************
const myName = "Pedro";
console.log(myName);

const myLastName = "Sanabria";
console.log(myLastName);

const myAge = 26;
console.log(myAge);

const myPet = "Silencio";
console.log(myPet);

const petAge = 4;
console.log(petAge);

const fullName = myName + " " + myLastName;
console.log(fullName);

const presentationText = `Hey! My name is ${fullName}, I am ${myAge} years old; I have a pet named ${myPet} and he's ${petAge} years old`;
console.log(presentationText);

// Difficulty Level: Medium **********************
let sumAges = myAge + petAge;
let substractAges = myAge - petAge;
let productAges = myAge * petAge;
let divisionAges = myAge / petAge;

console.log(sumAges, substractAges, productAges, divisionAges);

const student = {
  studentName: "Martín",
  age: 31,
  height: "1.8 mts",
  weight: "78 kgs",
  notesAverage: 2.5,
  curseSucceeded: false,
};

console.table(student);

console.log(student.studentName);
console.log(student.age);
console.log(student.height);
console.log(student.weight);
console.log(student.notesAverage);
console.log(student.curseSucceeded);

// pet object
const pet = {
  color: "black and white",
  height: "medium",
  age: "4 years",
  isVegan: false,
  hasBittenPeople: true,
};

console.table(pet);

console.log(pet.color);
console.log(pet.height);
console.log(pet.age);
console.log(pet.isVegan);
console.log(pet.hasBittenPeople);

// fruit array
const fruits = [
  "apple",
  "orange",
  "banana",
  "papayita",
  "meloncito",
  "mangou",
  "pine apple",
];

console.log(fruits);

/* for (let index = 0; index < fruits.length; index++) {
  const element = fruits[index];
  console.log(element);
} */

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log(fruits[5]);
console.log(fruits[6]);

// Difficulty Level: High **********************
/* Use a prompt ( ) that allows the entry of an age on the screen and compare it with the number 18, once this is done, save the result in a variable called IamAdult and display a message in the console that says:
"I am an adult" (and the value of the variable). */

/* let userAge = prompt("Please, put in your age");
let userInput = userAge.trim();
let parsedInput = parseInt(userInput);
let userAgeValidation = parsedInput >= 18;
let IamAdult = parsedInput;

// hasta aquí imprime lo mismo independientemente del input
console.log(`I am an adult, I am ${IamAdult}`);
// console.log(typeof userAgeValidation); // output: boolean.
// console.log(userAgeValidation); // output: true.

// el sgte if imprime según correponda la edad:
if (userAgeValidation) {
  let adultUser = userInput;
  console.log(`I am an adult, I am ${adultUser}`);
} else {
  console.log("sorry, grow up and come back");
} */

/* Create an array called "numbers" with a minimum of 5 elements and display the entire array and each of the elements separately in the console. */

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((element) => {
  console.log(element);
});

/* Create an array called "family" with a minimum of 5 objects and display the entire array and each of the elements separately in the console. */

const family = [
  { lastNamefamily: "Sanabria", status: "Rich" },
  { lastNamefamily: "Quintero", status: "Poor" },
  { lastNamefamily: "Gomez", status: "Starving" },
  { lastNamefamily: "Lopez", status: "emigrated to the US" },
  { lastNamefamily: "Sanabria", status: "only one member remains" },
];

console.table(family);

// the way without a loop:
console.log(family[0].lastNamefamily, family[0].status);
console.log(family[1].lastNamefamily, family[1].status);
console.log(family[2].lastNamefamily, family[2].status);
console.log(family[3].lastNamefamily, family[3].status);
console.log(family[4].lastNamefamily, family[4].status);

// with a forEach loop:
family.forEach((element) => {
  console.log(element.lastNamefamily, element.status);
});

/* Create a variable called "randomText" forming a phrase with the second element of the fruits array, the fourth element at numbers array and the first property of the fifth object of the family array. */

let randomText = fruits[1] + numbers[3] + family[4].lastNamefamily;
console.log(randomText);
