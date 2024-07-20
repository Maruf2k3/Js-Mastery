// A function is a block of code that performs a specific task.
// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.

//ways of declaring a function
//Simple Old way
let globalAge = 20; //can be accesed all over the code
function greet(userName) {
  //only access in this function | scope var
  let scopeAge = 21;
  console.log(`Hello ${userName} ${scopeAge} to the world of JS!`);
}
greet("Maruf Rahman");

//ES6 New way
const welcome = (username) => {
  //only access in this function | scope var
  let scopeAge = 22;
  console.log(`Hello ${username} ${scopeAge} to the world of JS!`);
};

welcome("Maruf Rahman");
//Global Var
console.log(globalAge);

// a [Method] is a function that is associated with an object. It allows objects to perform actions or provide functionalities.

const person = {
  name: "Sahab",
  age: 20,
  greetPerson: (name, age) => {
    return `Welcome Mr ${name} and Age ${age} years old`;
  },
};

console.log(person.greetPerson(person.name, person.age));
