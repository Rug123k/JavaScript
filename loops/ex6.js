// for in loop
let person = {
    name: "Rugved",
    age: 21,
    city: "Pune"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}