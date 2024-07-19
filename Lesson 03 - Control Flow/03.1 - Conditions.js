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
