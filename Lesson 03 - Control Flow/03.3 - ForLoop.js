//loop over a certain iterable or until a certain conditon is met

//Print [i] until its less than or equale to 10
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//Iteratable -> strings , array cls, objects
let simpleArr = ["apple", "mango", "banana"];
for (let i = 0; i < simpleArr.length; i++) {
  console.log(simpleArr[i]);
}

//For of Loop
let userName = "Maruf Rahman";
for (userChar of userName) {
  //Prints out each charecter all alone from the str userName
  console.log(userChar);
}

//For each loop
/*
  when using the forEach method, if you want to update the elements of the original array, you should use all three parameters of the callback function: the current element, the index, and the array itself

*/
let colors = ["bage", "red", "blue"];

colors.forEach((color, indx, arr) => {
  //arr[indx] -> to replace the existing array and update them
  //color.substring(1) -> extract letter from indx 1 to end
  arr[indx] = color[0].toUpperCase() + color.substring(1);
});
console.log(colors);
//ex 02 | For each loop
let numbers = [2, 4, 6, 8, 10];
numbers.forEach((num, indx, arr) => {
  arr[indx] = num * 2;
});
console.log(numbers);

//For in Loop
// The "for...in" loop in JavaScript is used to iterate over the enumerable properties of an object. It is a way to loop through the keys (property names) of an object.

const employeeInfo = {
  Romeo: "120k",
  Jamal: "100k",
  Bombom: "80k",
};

for (let key in employeeInfo) {
  console.log(`Key: ${key} and Value: ${employeeInfo[key]}`);
}
