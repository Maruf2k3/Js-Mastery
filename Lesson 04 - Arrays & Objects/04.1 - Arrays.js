//Array is a data structure that holds multiple data types or functions inside it

let mixArray = [
  "I am a str",
  10,
  true,
  { name: "Maruf", age: 12 },
  function greetings() {
    console.log("Hello There!");
  },
  ["I am second arrray", "I am second array 02"],
];

console.log(mixArray[5][0]); //accesing the 5 elements 1st indx
console.log(mixArray[3].name); //accesing the name key in the obj
//calling the function from the array
mixArray[4]();

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

//map methods or helper
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
let numbers = [2, 4, 6, 8, 10];
const numDouble = numbers.map((num) => num * 2);
console.log(numDouble);

// The "reduce" method executes a reducer function for array element.
// The "reducer" method returns a single value: the function's accumulated result.

//The function will take 2 values always and it will iterate over 2 values until array.length - 1 and apply the function

//Adding all the values in the array
const addViaReduce = numbers.reduce((a, b) => a + b);
console.log(`I am from Reduce: ${addViaReduce}`);

// The filter() method is a built-in array method in JavaScript that allows you to create a new array containing elements that pass a certain condition. It provides a clean and concise way to filter out elements from an array based on a specified criteria.

let news = [
  { title: "Assasianation of Kimbo Ludo", strength: "Trend" },
  { title: "Kid Found with bombom", strength: "Normal" },
  { title: "Women with wewe in her nono zone", strength: "Trend" },
];

//Will filter out any trend news from the array
const filtredArr = news.filter((info) => {
  // condition to filter out by Trend
  return info.strength === "Trend";
});
//Will return a new array
console.log(filtredArr);

// The find() method is another built-in array helper in JavaScript that allows you to find the [first element in an array] that matches a specific condition. It returns the value of the first element that satisfies the given testing function, or undefined if no element is found.

const findElement = news.find((info) => {
  return info.strength === "Trend";
});
//Found the FIRST Trend in the array and outputed it
console.log(findElement);
