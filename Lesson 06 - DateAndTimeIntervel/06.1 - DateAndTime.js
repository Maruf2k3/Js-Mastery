// In JavaScript, you can work with dates using the built-in Date object. The Date object allows you to create, manipulate, and format dates and times.

// Create a Date object representing the current date and time
const currentDate = new Date();
// console.log(currentDate);

// Create a Date object for a specific date and time (year, month, day, hours, minutes, seconds, milliseconds)
const specificDate = new Date(2023, 6, 25, 12, 30, 0, 0);
// console.log(specificDate);

const date = new Date();
// Month is 0-based (0: January, 1: February, ..., 11: December)
console.log(date.getMonth() + 1);

let ageMonth = 1;
let ageDay = 6;
let ageYear = 2003;

let Cday = date.getDate();
let Cmonth = date.getMonth() + 1;
let Cyear = date.getFullYear();

let age = `${Cyear - ageYear} years ${Cmonth - ageMonth} month ${
  Cday - ageDay
} day`;
console.log(age);
