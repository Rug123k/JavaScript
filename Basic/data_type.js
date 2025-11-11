/*
bigint
string
boolean
null
undefined
symbol=unique identifier
object


*/

console.log(typeof 1234567890n); //bigint
console.log(typeof "JohnDoe"); //string
console.log(typeof true); //boolean
console.log(typeof null); //object (this is a known quirk in JavaScript)
console.log(typeof undefined); //undefined
console.log(typeof Symbol('id')); //symbol
console.log(typeof {name: "John", age: 30}); //object
