//----------- Strings ---------

let lastName = "Rahman";
let firstName = "Maruf";

//String Methods

//its same as firstName + "" + lastName
let fullName = firstName.concat(lastName);
console.log(fullName);

//appends to the str
let addtionToLastName = (lastName += " Tangin");
console.log(addtionToLastName);

//Returns a numerical Value int
let nameCharLength = fullName.length;
console.log(nameCharLength);

//Returns the changed Cases
let fullNameUpperCase = fullName.toUpperCase();
console.log(fullNameUpperCase);
let fullNameLowerCase = fullName.toLowerCase();
console.log(fullNameLowerCase);

//returns the value from the indicated index values.
let sliceName = fullName.slice(0, 5);
console.log(sliceName); // slice(indx0 , endindx - 1)

//returns an array of the char
let fullNameArray = fullName.split(""); //seperates each char by no space
console.log(fullNameArray);
//The array will be now one string but between each char ther will be "-"
let fullNameJoin = fullName.split("").join("-");
console.log(fullNameJoin);

//Returns a boolean value | usefull in conditions
let fullNameDoIncludeM = fullName.includes("M");
console.log(fullNameDoIncludeM);

//removes whiteSpaces from start and end
let newFullName = "           Maruf Rahman        ";
let trimedNewFullName = newFullName.trim();
console.log(trimedNewFullName);

//Template Strings
//Using js variable in strings
console.log(`Hello I am ${firstName} ${lastName}. Happy to be here!`);
