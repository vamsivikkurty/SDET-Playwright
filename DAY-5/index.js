const obj = {
    name: "vamsi",
    age: 23,
    city: "Hyderabad"
}
 
console.log(JSON.stringify(obj)); // object -> string
console.log(JSON.parse('{"name":"vamsi","age":23,"city":"Hyderabad"}')); // string -> object





const timeoutId = setTimeout(() => {
    console.log("Data received");
}, 5000);
console.log("test");
 
clearTimeout(timeoutId);
 
const i = setInterval(() => {
    console.log("Checking for new data...");
}, 3000);
 
clearInterval(i);