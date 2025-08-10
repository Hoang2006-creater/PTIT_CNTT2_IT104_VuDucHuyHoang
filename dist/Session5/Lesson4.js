"use strict";
class Vehicles {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    displayInfo() {
        console.log(`Ten: ${this.name},Nam san xuat${this.year},Cong ty:${this.company}`);
    }
}
let Vehicle3 = new Vehicles(1, "Toyota", 2000, "Toyota");
Vehicle3.displayInfo();
