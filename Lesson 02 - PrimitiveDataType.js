//----------- Variable ---------
let name = "Maruf Rahman";
const age = 21;
var location = "Ajman,UAE"

let middleName; //undefined and can be a valid variable

/* 
    Let and Const are the only ones most used
    [let is closed soope variable while var isn't]
    const values can't be changed as its constants
*/

//----------- Numbers ---------

//These are called integers can be [+ve, -ve, bigNum , zero , decimals, wholeNum]

let positiveNum = 5;
let negativeNum = -10;
let bigNum = BigInt(10)
let decimalNum = 4.5;

//Simple Calculation
console.log(positiveNum - negativeNum)//result -> 15
console.log(decimalNum * 5)// -> 22.5
console.log(positiveNum ** 2)//exponent -> 25

//----------- Booleans ---------

// includes [true , false , -0 , NaN , emptyString ""]
let state = true;
let stateName = "";

console.log(typeof(state))

//----------- Comparasion Operator ---------

// RELATIONAL OPERATORS
// > Greater Then
// < Less Then
// >= Greater Then or equal to
// <= Less Then or equal to
console.log(10 >= 11);

// EQUALITY OPERATORS
// === strict equality (Type + Value)
// !== strict non-equality (Type + Value)
// == Lose equality (values)
// != Lose equality (values)

console.log(10 === 10);

//----------- Strings ---------

let lastName = "Rahman"
let firstName = "Maruf"

//its same as firstName + "" + lastName
let fullName = firstName.concat(lastName)
console.log(fullName)

//appends to the str
let addtionToLastName = lastName += " Tangin";
console.log(addtionToLastName)

//Returns a numerical Value int
let nameCharLength = fullName.length
console.log(nameCharLength)

//Returns the changed Cases
let fullNameUpperCase = fullName.toUpperCase();
console.log(fullNameUpperCase)
let fullNameLowerCase = fullName.toLowerCase();
console.log(fullNameLowerCase)

//returns the value from the indicated index values.
let sliceName = fullName.slice(0,5)
console.log(sliceName) // slice(indx0 , endindx - 1)

//returns an array of the char
let fullNameArray = fullName.split("");//seperates each char by no space
console.log(fullNameArray);
//The array will be now one string but between each char ther will be "-"
let fullNameJoin = fullName.split("").join("-");
console.log(fullNameJoin);

//Returns a boolean value | usefull in conditions
let fullNameDoIncludeM = fullName.includes("M")
console.log(fullNameDoIncludeM)

//removes whiteSpaces from start and end
let newFullName = "           Maruf Rahman        ";
let trimedNewFullName = newFullName.trim();
console.log(trimedNewFullName)

//----------- type Conversion ---------
let randomNumInt = 1020;
let randomMoneyStr = "2000";
let randomFloatValueStr = "46.90";

//convert str to int
let randomMoneyInt = parseInt(randomMoneyStr);//also Number(randomMoneyStr) would work same
console.log(randomMoneyInt + 20)//Its an int

//convert str to decimal
let randomFloatValueInt = parseFloat(randomFloatValueStr);
console.log(randomFloatValueInt + 0.82)//a decimal val

//convert int to str
let randomNumStr = randomNumInt.toString();//String(randomNumInt) will work same
console.log("Year: " + randomNumStr)//an str