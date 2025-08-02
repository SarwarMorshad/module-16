// !! Declare of a String

const country = "Bangladesh";
const division = "Dhaka";
const district = `Dhaka`;
const upazila = new String("Dhaka");

// ?? String is imutable
// ?? Array is mutable

//  !! Uppercase and Lowercase
const str = "Today I AM going to learn JavaScript String";

const upperCase = str.toUpperCase();
const lowerCase = str.toLowerCase();

// console.log(upperCase);
// console.log(lowerCase);

//  !! Trimming a String
const trim = "   Hello World!   ";
const trimmed = trim.trim();
// console.log(trim);
// console.log(trimmed);

const address = "Faucherweg";
const part = address.slice(2, 6);

// console.log(part);

// !! Splitting a String
const sentence = "I love programming in JavaScript and Python";

const words = sentence.split(" "); // Split by space
const words1 = sentence.split("a"); // Split where it finds 'a'

// console.log(words);
// console.log(words1);

//  !! Concatenation of Strings
const firstName = "John";
const lastName = "Doe";

const fullName1 = firstName + " " + lastName; // Concatenate with space
// console.log(fullName1);

const fullName = firstName.concat(" ", lastName); // Concatenate with space
// console.log(fullName);

//  !! includes() method
const text = "Hello, welcome to the world of JavaScript!";
const hasWelcome = text.includes("welcome"); // Check if 'welcome' is in the string
// console.log(hasWelcome); // true

//  !! Reversing a String
// ** Reverse using a for of loop
let reversed = "";
for (const char of stringToReverse) {
  reversed = char + reversed; // Prepend each character
}
// console.log(reversed);

// ** Reverse using split, reverse, and join methods (Shortcut)
const stringToReverse = "This string will be reversed";
const reversedString = stringToReverse.split("").reverse().join("");
// console.log(reversedString);
