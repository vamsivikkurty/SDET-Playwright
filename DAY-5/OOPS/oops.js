class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} make a sound`)
    }
}

const dog = new Animal("Jacky");
const cat = new Animal("Tom");

dog.speak();
cat.speak();