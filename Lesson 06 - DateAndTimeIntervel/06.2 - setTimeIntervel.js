// setInterval:
// -> The setInterval function is used to repeatedly execute a function or a block of code at a specified interval. It takes two arguments: the function or code to be executed and the time interval (in milliseconds) between each execution.

// Example: Runs every 1 Sec
const setInterValEx = setInterval(() => {
  console.log("This function is being executed at the interval.");
}, 1000);

// setTimeout:
// -> The setTimeout function is used to execute a function or a block of code after a specified delay. It takes two arguments: the function or code to be executed and the time delay (in milliseconds) before the execution.

// The setInterval function will continue to execute the specified code at the specified interval until it is stopped using the clearInterval function.

const setTimeOutEx = setTimeout(() => {
  clearInterval(setInterValEx);
  console.log("The exicution is done!");
}, 6000);
