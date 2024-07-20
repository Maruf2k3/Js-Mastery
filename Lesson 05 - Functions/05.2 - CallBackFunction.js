// When we provide function as an (argument) to other function/argument that function is known as callback function.

// callback(function() {...})

//Used when you need one function to finish then the second function start

//The callBack Function
const f1 = (f2) => {
  console.log("I am Function 1");
  f2();
};

function f2() {
  console.log("I am Function 2");
}

//F1 will exicute then f2 will exicute
f1(f2);
