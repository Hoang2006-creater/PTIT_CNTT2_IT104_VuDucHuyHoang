"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    displayInfo() {
        console.log(`Ten:${this.name},Cong ty: ${this.company},SDT:${this.phone}`);
    }
}
let employee1 = new Employee("hoang", "h", 12345678);
employee1.displayInfo();
