//Array is a data structure that holds multiple data types or functions inside it

let mixArray = [
  "I am a str",
  10,
  true,
  { name: "Maruf", age: 12 },
  function greetings() {
    console.log("Hello There!");
  },
  ["I am second arrray"],
];

console.log(mixArray[5][0]); //accesing the 5 elements 1st indx
console.log(mixArray[3].name); //accesing the name key in the obj

//--------- Methods ----------
// push(value) -> Add item at the end of the array
// pop() -> Remove item at the end of the array
// shift() -> Remove from the start
// unshift(value) -> Add to start
// concat() -> combining arrays
// join("seperatedByWhat") - creates string from array
// reverse() - reverse an array
// slice() - copy portion of an array or use as index access
// sort() - sorts an array
let fruits = ["Apple", "Banana", "Citrus", "Mango", "Grape"];

fruits.push("Strawberry");
fruits.pop();
fruits.shift();
fruits.unshift("Apple");
console.log(fruits);

let fruitsStr = fruits.join("-");
console.log(fruitsStr);
console.log(fruits.slice(0, 3));
console.log(fruits.reverse());
