//----------- Conditionals ---------

let age = 19;

if (age >= 18) {
  console.log(`You are ${age} years old and you are now and adult`);
} else if (age <= 18) {
  console.log(`You are ${age} years old and you are not an adult`);
} else {
  console.log("Invalid Input!");
}

//--------- Logical Operators-------
/*
    And -> &&   #Both condition must be true
    Or -> ||    #either condition can be true
    Not -> !
*/
let passWord = "It is a valid password";
if (passWord.length >= 8 && passWord.includes("password")) {
  //Since both argument are true thus its true
  console.log("Its a good password!");
} else {
  console.log("You password is at risk!");
}

// The ternary operator in JavaScript is a concise way of writing conditional expressions. It is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), an expression to execute if the condition is true, followed by a colon (:), and an expression to execute if the condition is false.

// condition ? exprIfTrue : exprIfFalse;
const canDrive = age >= 18 ? "You are able to Drive" : "You can't Drive";
console.log(canDrive);
