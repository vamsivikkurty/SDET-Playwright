// Question 1 (Swapper Question)

let a = 5;
let b = 10;

[a,b] =[b,a]
console.log("a : "+a);
console.log("b : "+b);


// Question 2 

function checkType(input){
    if (typeof input === "string"){
        console.log("This is a String");

    }else if (typeof input === "number"){
        console.log("This is a number");
    }
    else{
        console.log("Please provide valid Data type");
    }
}
checkType(5);
checkType("vamsi");



// Question 3 (Initial Creator)

let fullName = "John Doe";
let initialLetter = fullName.split(" ")[0][0] + fullName.split(" ")[1][0];
console.log(initialLetter);



// Question 4 (The Cleaner)

let messy = " Javascript is fun ";
let cleanedSentence = messy.trim();
let LowerCaseSentence= cleanedSentence.toLowerCase();
console.log(LowerCaseSentence);

// Question 5 (The Grocery list)

let cart = ["Bread", "Curd", "Cheese"]
cart.push("Milk");
cart.unshift("Eggs");
cart.pop();
console.log(cart);



// Question 6 (Value Finder)

let numbers = [10,20,30,40,50];
let numberExists = numbers.includes(30);
let numberAtIndex = numbers.indexOf(50);
console.log(numberExists);
console.log(numberAtIndex);