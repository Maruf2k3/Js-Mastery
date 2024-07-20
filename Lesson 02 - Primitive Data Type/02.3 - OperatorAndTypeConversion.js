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

//----------- type Conversion ---------
let randomNumInt = 1020;
let randomMoneyStr = "2000";
let randomFloatValueStr = "46.90";

//convert str to int
let randomMoneyInt = parseInt(randomMoneyStr); //also Number(randomMoneyStr) would work same
console.log(randomMoneyInt + 20); //Its an int

//convert str to decimal
let randomFloatValueInt = parseFloat(randomFloatValueStr);
console.log(randomFloatValueInt + 0.82); //a decimal val

//convert int to str
let randomNumStr = randomNumInt.toString(); //String(randomNumInt) will work same
console.log("Year: " + randomNumStr); //an str
