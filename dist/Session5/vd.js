"use strict";
class Persons {
    constructor(name, _age, email) {
        this.name = name;
        this._age = _age;
        this.email = email;
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        if (newAge >= 0) {
            this._age = newAge;
        }
        else {
            console.log("Loi");
        }
    }
    showInfo() {
        console.log(`${this.name},Age:${this.age},Email:${this.email}`);
    }
}
class Students extends Persons {
    showEmail() {
        console.log(`Email:${this.email}`);
    }
}
const person = new Persons("rikkei", 3, "rikkei.edu");
console.log("Truy cap thuoc tinh voi public", person.name);
person.name = "PTIT";
console.log("sau khi thay doi la", person.name);
