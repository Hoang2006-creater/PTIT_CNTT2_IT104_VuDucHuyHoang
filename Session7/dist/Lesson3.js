"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Ten dong vat:${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("Meo meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("Gau gau");
    }
}
const cat = new Cat("Meo");
const dog = new Dog("Cho");
cat.printName();
cat.makeNoise();
