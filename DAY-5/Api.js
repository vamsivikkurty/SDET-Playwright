//Api-1

async function getFact(url){
    
    let data = await fetch("https://catfact.ninja/fact");
    data = await data.json();
    let arr = [data];
    let res = arr.filter(item => item.fact.length > 30);

    return res;
    
}

getFact().then(data => console.log(data));




//Api-2

async function getProducts(url){

    try{

        let data = await fetch("https://dummyjson.com/products");
        data = await data.json();

        let filteredProducts = data.products.filter(
            item => item.price > 50
        );

        let res = filteredProducts.map(
            item => "First " + item.title
        );

        console.log(res);

    } 
    catch(err){

        console.log(err);

    }

}

getProducts();




//Api-3

async function countryName(){

    try{  

        let name = await fetch(
            "https://restcountries.com/v3.1/all?fields=name"
        );

        let data = await name.json();

        let res = data.map(
            item => " Hello " + item.name.common
        );

        console.log(res);

    }
    catch(err){

        console.log(err);

    }

}

countryName();




//Api-4

async function Posts() {

    try{

        let data = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        let res = await data.json();

        res = res.filter(
            p => p.userId === 2
        );

        res = res.map(
            p => p.title
        );

        console.log(res);

    } 
    catch(err){

        console.log(err);

    }
    
}

Posts();




//Api-5

async function getUsers() {

    try {

        let response = await fetch(
            "https://randomuser.me/api/?results=10"
        );

        let data = await response.json();

        let males = data.results.filter(
            user => user.gender === "male"
        );

        let names = males.map(
            user => user.name.first
        );

        console.log(names);

    } 
    catch(err) {

        console.log(err);

    }

}

getUsers();




//Api-6

async function getDogFacts() {

    try {

        let res = await fetch(
            "https://dogapi.dog/api/v2/facts"
        );

        let obj = await res.json();

        let facts = obj.data.map(
            d => d.attributes.body
        );

        console.log(facts);

    } 
    catch(err) {

        console.log(err);

    }

}

getDogFacts();




//Api-7

async function getQuotes() {

    try {

        let response = await fetch(
            "https://zenquotes.io/api/quotes"
        );

        let data = await response.json();

        let shortQuotes = data.filter(
            q => q.q.length < 100
        );

        let quotes = shortQuotes.map(
            q => q.q
        );

        console.log(quotes);

    } 
    catch(err) {

        console.log(err);

    }

}

getQuotes();




//Api-8

async function getAstronauts() {

    try {

        let response = await fetch(
            "http://api.open-notify.org/astros.json"
        );

        let obj = await response.json();

        let names = obj.people.map(
            person => person.name
        );

        console.log(names);

    } 
    catch(err) {

        console.log(err);

    }

}

getAstronauts();




//Api-9

async function getPokemon() {

    try {

        let response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=20"
        );

        let obj = await response.json();

        let filteredPokemon = obj.results.filter(
            p => p.name.startsWith("b")
        );

        let names = filteredPokemon.map(
            p => p.name
        );

        console.log(names);

    } 
    catch(err) {

        console.log(err);

    }

}

getPokemon();




//Api-10

async function getTodos() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );

        let data = await response.json();

        let filteredTodos = data.filter(
            d => d.id <= 10
        );

        console.log(filteredTodos);

    } 
    catch(err) {

        console.log("Error", err);

    }

}

getTodos();