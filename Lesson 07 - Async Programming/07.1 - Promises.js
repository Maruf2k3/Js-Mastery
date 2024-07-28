//An arrow function initiated
const oddOrEven = (num) => {
  //made a new promise and takes 2 vlaues [resolve or reject] an async function
  return new Promise((re, rj) => {
    //ternary contation resolve is even reject is odd
    num % 2 === 0 ? re(`${num} is Even!`) : rj(`${num} is Odd!`);
  });
};

// console.log(oddOrEven(2));
//random number value
let randomNum = 5;
//used [.then] to exicute the function
oddOrEven(randomNum)
  //if resolved then this
  .then((msg) => {
    console.log(`The Promise was a sucess! -> ${msg}`);
  })
  //If rejected then this
  .catch((err) => {
    console.log(`The Promise was rejected! -> ${err}`);
  });
