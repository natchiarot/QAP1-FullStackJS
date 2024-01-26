// buff.includes()

// Buffer.from() enables you to create a new buffer from any object.
// Will return a boolean value.

var bufferOne = Buffer.from("abc");

console.log(bufferOne.includes("a"));

var bufferTwo = Buffer.from("sql");

console.log(bufferTwo.includes("ab"));

// Buffer swap.

const bufferThree = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);
console.log(bufferThree);

// Returning a JSON version of the buffer object.
console.log(bufferThree.toJSON());

// Swapping byte order to 16-bit
bufferThree.swap16();
console.log(bufferThree);

// Swapping byte order to 32-bit
bufferThree.swap32();
console.log(bufferThree);

// Swapping byte order to 64-bit
bufferThree.swap64();
console.log(bufferThree);

// Buffer.fill()

const bufferFour = Buffer.alloc(15).fill("e");

console.log(bufferFour.toString());

// Checking the length of a butter object with Buffer.byteLength().

var bufferTwoLength = Buffer.byteLength(bufferTwo);
console.log(bufferTwoLength);

var bufferThreeLength = Buffer.byteLength(bufferThree);
console.log(bufferThreeLength);

var bufferFourLength = Buffer.byteLength(bufferFour);
console.log(bufferFourLength);
