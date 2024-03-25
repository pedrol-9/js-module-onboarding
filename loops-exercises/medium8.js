/* ***8*** Using the loop that you think is correct, create an array with at least 4 objects with 4 properties, each of those created objects must represent a member of a family group
(they can be fictitious people).

Then make a program (by saying program the intention is that it is not just the loop, but rather a function that contains the loop) that displays a presentation message for each element of the array through the console.

In the console it should look like the example.

Hello, I am María Lopez (mother) and I am 40 years old.
Hello, I am Juan Perez (father) and I am 38 years old.
Hello, I am Romina Perez (daughter) and I am 13 years old.
Hello, I am Tomás Perez (son) and I am 10 years old.

Object Model

{name: 'Juan', last-name: 'Perez', age: 38, member: 'father'}

Tip! use backticks for this. */

let familyMembers = [
    { firstName: "Homero", lastName: "Simpson", membership: "father", age: 40, },
    { firstName: "March", lastName: "Simpson", membership: "mother", age: 39, },
    { firstName: "Lisa", lastName: "Simpson", membership: "sister", age: 11, },
    { firstName: "Bart", lastName: "Simpson", membership: "brother", age: 13, },
    { firstName: "Maggy", lastName: "Simpson", membership: "sister", age: 2, }
]

function printMemberFamily() {
    for (const member of familyMembers) {
        console.log(`Hello, I am ${member.firstName} ${member.lastName} (${member.membership}) and I am ${member.age} years old`);
    }
}

/* function printMemberFamily2() {
    for (let i = 0; i < familyMembers.length; i++) {
        let member = familyMembers[i];
        console.log(`Hello, I am ${member.firstName} ${member.lastName} (${member.membership}) and I am ${member.age} years old`);
    } // son muy parecidos, pero en for debo crear la variable iteradora.
} */


printMemberFamily();
// printMemberFamily2();
