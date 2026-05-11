// One-Line Arrow Function with Implicit Return
const square = num => num * num;
console.log(square(5));

// Arrow Function with map()
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// Even/Odd Checker using Arrow Function

const checkEvenOdd = num => 
    num % 2 === 0 ? "Even" : "Odd";
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(10));

// Student Grade Calculator using Arrow Function

const calculateGrade = marks => {
    if (marks >= 90) {
        return "A";
    }
    else if (marks >= 75) {
        return "B";
    }
    else if (marks >= 50) {
        return "C";
    }
    else {
        return "Fail";
    }
};
console.log(calculateGrade(82));

// Convert Normal Function into Arrow Function

function add(a,b) {
     return a+ b;
}

const add = (a, b) => {
     return a+b;
};
console.log(add(10, 5));


// Call Stack Flow for Nested Functions

function one() {
     two ();
}
function two () {
     three ();
}
function three() {
     console.log("Hello");
}
one();

// Recursive Factorial Function

function factorial(n) {
     if(n === 1) {
          return 1;
     }
     return n* factorial(n-1);
}
console.log(factorial(5));

// Recursive Fibonacci Function

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6));

// Simulate Stack Overflow with Recursion

function test() {
    console.log("Running");

    test();
}
test();

// QUESTION--Trace Execution Order of Nested Function Calls

function first() {

    console.log("First Function");

    second();
}
function second() {

    console.log("Second Function");

    third();
}
function third() {

    console.log("Third Function");
}
first();

//Question- Convert JSON String into Object

const jsonString =`{"name":"Vamsi","age": 23}`;
const obj = JSON.parse(jsonString);
console.log(obj);
console.log(obj.name);

// JSON Array of Employee Records

const employees = [
    {
        id: 1,
        name: "Vamsi",
        department: "IT"
    },
    {
        id: 2,
        name: "Arjun",
        department: "HR"
    }
];
console.log(employees);

// Convert Object into JSON String

const user = {
    name: "Vamsi",
    age: 23
};
const jsonData = JSON.stringify(user);
console.log(jsonData);


// Parse API-like JSON Data and Display Values

const apiData = `{
    "id": 1,
    "title": "JavaScript",
    "price": 500
}`;
const product = JSON.parse(apiData);
console.log(product.title);
console.log(product.price);

// Question -- Clone Object Without Affecting Original
const user1 = {
     name : "Vamsi",
     age: 23
};
const user2 = {...user1 };
user2.name = "Vamsi";
console.log(user1);
console.log(user2);

// Compare Arrays using Reference Equality
const a = [1,2,3];
const b =[1,2,3];
console.log(a === b);

// Object Reference Behavior
const obj1 = {
    name: "Vamsi"
};
const obj2 = obj1;
obj2.name = "Tarun";
console.log(obj1.name);
console.log(obj2.name);


// Question--Shallow Copy using Spread Operator
// Spread operator copies array elements into new array
const original = [1,2,3];
const copy = [...original];
copy.push(4);
console.log(original);
console.log(copy);

//premitivecopybehaviour
let a = 10;
 let b = a;
 b = 20;
 console.log(a);
 console.log(b);

 // Block Scope using let
    let message = "Hello";
    console.log(message);

console.log(message);


// Write a program demonstrating closure behavior. 

function outer () {
     let count =0;
     return function inner() {
          count++;
          console.log(count);
     };
}
const counter = outer() ;
counter ();
counter();
counter();

// Debug Incorrect Variable Scoping
for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

for (let i=1; i<=3; i++) {
     setTimeout(() => {
          console.log(i);
     }, 1000);
}

// Nested Functions Accessing Outer Variables
function outerFunction() {
     let name ="Vamsi";
     function innerFunction() {
          console.log(name);
     }
     innerFunction();
}
outerFunction();

//variable Hoisting
console.log(a);
var a = 10; 
console.log(a);



//Heap Memory
const obj1 = {
    name: "Vamsi"
};
const obj2 = obj1; // obj1 nd obj2 reference same object
console.log(obj1); 
console.log(obj2);
// Objects are stored in heap memory




// Memory Allocation Diagram Example

const person ={
     name: "Vamsi"
};
const person2 = person;

// Stack
// -----
// person  → 500
// person2 → 500

// Heap
// -----
// 500 → {
//    name: "Vamsi"
// }

// Stack memory stores primitive values directly, while heap memory stores objects and arrays using references.




// Object Mutation through References

const user1 = {
     city: "Pune"
};
const user2 = user1;
user2.city = "Mumbai"
console.log(user1.city);
console.log(user2.city);


//  question--Predict Output of Memory Program

let x = 5;
let y= x;
y=15;
const arr1 = [1,2];
const arr2 = arr1;
arr2.push(3);
console.log(y);
console.log(arr1);
console.log(arr2);


// Stack Memory Behavior
// Primitive values are stored in stack memory

let a = 10;
let b = a; // b gets copy of a nd doesnot affect a
b = 20;
console.log(a); 
console.log(b);

