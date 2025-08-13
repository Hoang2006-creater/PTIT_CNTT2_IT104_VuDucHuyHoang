"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Ten: ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Ma sinh vien: ${this.id},Ten ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Ma giao viem: ${this.subject} Ten: ${this.name}`);
    }
}
const student = new Student("1", "Hoang");
const teacher = new Teacher("Trần Thị B", "Toán học");
student.displayInfo();
teacher.displayInfo();
