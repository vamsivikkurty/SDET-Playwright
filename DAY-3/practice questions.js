//DAY 3
//1. Logging Names
const names = ['Alice', 'Bob', 'Charlie'];

names.forEach(name => {
  console.log(`Hello, ${name}`);
});

//2. Temperature Conversion
const tempsC = [0, 10, 20, 30];

const tempsF = tempsC.map(c => c * 1.8 + 32);

console.log(tempsF);

//Level 2: Data Filtering
//3. Finding Adults
const users = [
  { name: 'Li', age: 16 },
  { name: 'Dan', age: 22 },
  { name: 'Sarah', age: 17 }
];

const adults = users.filter(user => user.age >= 18);

console.log(adults);

//4. String Lengths
function filterLongStrings(arr) {
  return arr.filter(str => str.length > 5);
}

//Level 3: Reduce Power
//5. Total Cost
const prices = [19.99, 5.50, 3.99, 25.00];

const total = prices.reduce((sum, price) => sum + price, 0);

console.log(total);

//6. Counting Occurrences
const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];

const count = fruits.reduce((acc, item) => {
  return item === 'apple' ? acc + 1 : acc;
}, 0);

console.log(count);

//Level 4: Advanced
//7. Filter + Map (Even Squares)

const nums = [1, 2, 3, 4, 5, 6];

const result = nums
  .filter(n => n % 2 === 0)
  .map(n => n * n);

console.log(result);

//8. Extract Titles
const products = [
  { id: 1, title: 'Laptop' },
  { id: 2, title: 'Mouse' }
];

const titles = products.map(p => p.title);

console.log(titles);

//Level 5: Logic Challenges
//9. Average Score
const scores = [80, 90, 70, 100];

const avg = scores.reduce((sum, score) => sum + score, 0) / scores.length;

console.log(avg);

//10. Flatten Array (Without .flat())
const nested = [[1, 2], [3, 4], [5, 6]];

const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat);