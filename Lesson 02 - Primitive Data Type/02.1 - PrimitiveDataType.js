//----------- Variable ---------
let name = "Maruf Rahman";
const age = 21;
var location = "Ajman,UAE";

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
let bigNum = BigInt(10);
let decimalNum = 4.5;

//Simple Calculation
console.log(positiveNum - negativeNum); //result -> 15
console.log(decimalNum * 5); // -> 22.5
console.log(positiveNum ** 2); //exponent -> 25

//----------- Booleans ---------

// includes [true , false , -0 , NaN , emptyString ""]
let state = true;
let stateName = "";

console.log(typeof state);
