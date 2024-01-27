// Creating a buffer from a string.
// Buffer.from() enables you to create a new buffer from any object.
var bufferOne = Buffer.from("abc");

var bufferTwo = Buffer.from("sql");

// buff.includes()
// Checking if it includes the character or substring. Will return a boolean value.
console.log("\nBuffer One: ", bufferOne);
console.log("Does Buffer One include 'a'? ", bufferOne.includes("a"));

console.log("\nBuffer Two: ", bufferTwo);
console.log("Does Buffer Two include 'ab'? ", bufferTwo.includes("ab"));

// Creating a buffer from an array of hexidecimal values.
const bufferThree = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);

// Displaying the original buffer <bufferThree>.
console.log("\nOriginal Buffer Three: ", bufferThree);

// Displaying a JSON version of the buffer object.
console.log("\nJSON representation: ", bufferThree.toJSON());

// Swapping byte order to 16-bit
bufferThree.swap16();
console.log("\nAfter swapping to 16-bit: ", bufferThree);

// Swapping byte order to 32-bit
bufferThree.swap32();
console.log("After swapping to 32-bit: ", bufferThree);

// Swapping byte order to 64-bit
bufferThree.swap64();
console.log("After swapping to 64-bit: ", bufferThree);

// Buffer.fill() creating a buffer of size 15 filled with specified character ("e").
const bufferFour = Buffer.alloc(15).fill("e");
console.log("\nBuffer filled with 'e': ", bufferFour.toString());

// Checking the length of bufferThree and bufferFour using Buffer.byteLength().
var bufferThreeLength = Buffer.byteLength(bufferThree);
console.log("\nLength of Buffer Three: ", bufferThreeLength);

var bufferFourLength = Buffer.byteLength(bufferFour);
console.log("Length of Buffer Four: ", bufferFourLength);
