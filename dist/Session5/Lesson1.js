"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    displayInfo() {
        console.log(`Ten: ${this.name},Nam san xuat${this.year},Cong ty:${this.company}`);
    }
}
let Vehicle1 = new Vehicle("Toyota", 2000, "Toyota");
let Vehicle2 = new Vehicle("Kia", 2001, "Kia");
Vehicle1.displayInfo();
Vehicle2.displayInfo();
