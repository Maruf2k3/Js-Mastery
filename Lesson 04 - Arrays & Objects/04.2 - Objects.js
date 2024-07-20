// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

// {key: value}

let randomObj = {
  name: "Maruf",
  age: 21,
  dob: "6th Jan 2003",
  lastname: "Rahman",
  location: ["earth", "UAE"],
};

console.log(randomObj.name);
//Changed the name
console.log((randomObj.name = "Mahrab"));
let planet = randomObj.location[0];
let country = randomObj.location[1];
console.log(
  `I am ${
    randomObj.name + " " + randomObj.lastname
  } I am from ${planet} and from ${country} I am ${randomObj.age} years old!`
);
