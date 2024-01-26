const {
  generateFromEmail,
  generateUsername,
} = require("unique-username-generator");

// Generating a username from email, also add four random digits to it.
const usernameOne = generateFromEmail("natalina.chiarot@keyin.com", 4);
console.log(usernameOne);

// Completely random username without any parameters.
const usernameTwo = generateUsername();
console.log(usernameTwo);

// With all parameters (a seperator, random digits, a max length and characters to be included).
const usernameThree = generateUsername("-", 4, 20, "third");
console.log(usernameThree);
