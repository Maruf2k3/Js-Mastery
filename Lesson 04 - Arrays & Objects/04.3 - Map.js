// Map is a built-in data structure introduced in (ES6) that allows you to store key-value pairs where both the keys and values can be of any data type. It is similar to an object, but with a few key differences

//Array for Map
const employeeInfo = [
  ["Maruf", 2003],
  ["Mahrab", 2004],
  ["Mahdi", 2006],
];

const map = new Map(employeeInfo);
console.log(map);

//Methods
//.get(key) -> returns the value if key exits else undefined
const marufBirthYear = map.get("Maruf");
console.log(marufBirthYear);
//.set(key , value)
map.set("Medo", 2003);
console.log(map);
//.keys() -> return all the key in a map
console.log(map.keys());
//.values() -> return all the values in a map
console.log(map.values());
//.delet(key) -> delets the key
map.delete("Medo");
console.log(map);
//.size -> returns the length of the map
console.log(map.size);
//Other methods like clear() , has() are also powerfull
