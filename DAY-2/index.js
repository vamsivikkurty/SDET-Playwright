let a="vamsi";
let b="priya";
let c="harshini";

console.log(`Hello, ${a} ,${b} and ${c}!`);

function table(number)
{
    for(let i=0;i<10;i++)
    {
        console.log(`${number} x ${i} = ${number*i}`);
    }
}
table(5);

let sum=(x,y)=>x+y;
console.log("addition of two numbers: "+sum(5,10));

let arr=[1,2,3,4,5];

arr.map(function(x)
{
    console.log(`Multiplied numbers ${x*2}`);
})

arr.map(x=>x*2).forEach(x=>console.log(`Multiplied numbers are ${x}`));
arr.push("Bharath");
arr.filter(x=>typeof x==="number").map(x=>x*2).forEach(x=>console.log(`Multiplied numbers are ${x}`));