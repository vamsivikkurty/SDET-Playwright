
//Q1
function formatGuests(names) {
    const guests = names.slice(1).map(name => `Guest: ${name}`);
    return guests.join("\n");
}

const names = ["Vamsi", "Tarun", "Akhil", "Mohan"];
console.log(formatGuests(names));

//Q2
const getHighNumbers = (values) => {
    const threshold = Math.floor(Math.random() * 50) + 1;

    return values
        .filter(value => typeof value === "number")
        .filter(number => number > threshold);
};

const mixedValues = [20, "hey", 15, "30", 55, 3, "there", 38, 76];
console.log(getHighNumbers(mixedValues));


//Q3
let prices = ["220", "130", "40", "178"];

prices.splice(prices.length - 1, 1);

const numberPrices = prices.map(price => Number(price));
const sumPrices = (total, price) => total + price;
const totalPrice = numberPrices.reduce(sumPrices, 0);

console.log(`Total Price: $${totalPrice}`);