"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    getPhone() {
        return this.phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}, Company: ${this.company},Phone:${this.phone}`);
    }
}
class classManager extends Employee {
    constructor(name, company, phone, timeSize) {
        super(name, company, phone);
        this.teamSize = timeSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`So luong thanh vien : ${this.teamSize}`);
    }
}
const emp = new Employee("Nguyễn Văn A", "ABC Corp", "0123456789");
emp.printInfo();
console.log("----");
const mgr = new classManager("Trần Thị B", "XYZ Ltd", "0987654321", 5);
mgr.printInfo();
