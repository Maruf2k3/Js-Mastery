// The spread operator is a new addition to the set of operators in JavaScript ES6.
// It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator is commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.
const numArr = [10, 12, 20, 30, 42];
const numArr2 = [23, 67, 89, 90, 91];

//Will expand the array then there will be each number rather than an array of number
const findMax = Math.max(...numArr);
//will Return NaN
// const findMax = Math.max(numArr);
console.log(findMax);
//returns a single array with both array
const concateArr = [...numArr, ...numArr2];
console.log(concateArr);
const myName = "maruf rahman";
//returns a sepearted each char
console.log(...myName);

// The rest parameter syntax allows a function to accept an indefinite number of arguments

const multiply = (...numbers) => numbers.map((num) => num * 2);

console.log(multiply(2, 4, 6, 8, 10));
