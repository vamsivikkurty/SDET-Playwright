console.log(greet);  // undefined
var greet = "Hello World";
console.log(greet) // Hello World


console.log(greet);  // error
let greet = "Hello World";
console.log(greet) 



//function hoisting

sayHi()// Hello World 
function sayHi(){
    console.log("Hello World!")
}






sayHi()

// const sayHi =()=>{  //error
//     console.log("Hello")
// }
 
var sayHi =()=>{ 
    console.log("Hello")
}









//OBJECTS AND PROTOTYPES



const car = {
    brand : "Tesla",
    start : function(){
        console.log("Vroom Vroom")
    }
}


const car = {
    brand : "Tesla",
    start : () => console.log("Vroom Vroom")
}

console.log(car.start())


function start(){
    console.log("Vroom")
}

const c1 = new start();
const c2= new start();

start.prototype.stop = function(){
    console.log("stop")
}


c1.stop()
c2.stop()
c1.start() //gives error




//example
const animal = {eats: true};
const rabbit = Object.create(animal);
rabbit.carrot= ()=> console.log("He is eating")
console.log(rabbit.eats);
console.log(rabbit.hasOwnProperty('eats'))
console.log(rabbit.hasOwnProperty('carrot'))
console.log(rabbit.toString())






const arr = [1,2,3];
arr.reverse();

for(let e in arr){ //in -> index, of -> value
    console.log(e)
}

for(let e of arr){ //in -> index, of -> value
    console.log(e)
}