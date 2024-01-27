// Importing the necessary functions from the 'unique-username-generator' library.
const {
  generateFromEmail,
  generateUsername,
  uniqueUsernameGenerator,
} = require("unique-username-generator");

// Generating a username from email, with additional random digits.
const usernameOne = generateFromEmail("natalina.chiarot@keyin.com", 4);
console.log("\nUsername One: ", usernameOne);

// Generating a random username without any parameters.
const usernameTwo = generateUsername();
console.log("\nUsername Two: ", usernameTwo);

// Generating a username with specified parameters (a seperator, random digits, a max length and characters).
const usernameThree = generateUsername("-", 4, 20, "third");
console.log("\nUsername Three: ", usernameThree);

// Custom dictionary example.
const customColors = [
  "Red robin",
  "Orange orchid",
  "Yellow yarn",
  "Green grapes",
  "Blue berries",
  "Purple plum",
];

// Configuration for uniqueUsernameGenerator using a custom dictionary.
const customUsername = {
  dictionaries: [customColors],
  style: "upperCase",
  randomDigits: 2,
};

// Generating a unique username with the custom configuration.
const customGeneratedUsername = uniqueUsernameGenerator(customUsername);
console.log("\nCustom Generated Username: ", customGeneratedUsername);
