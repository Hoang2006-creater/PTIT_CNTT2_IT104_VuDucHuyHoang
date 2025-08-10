"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    displayInfo() {
        console.log(`ID:${this.id},Tuoi ${this.age},email: ${this.email}`);
    }
}
let students = [];
students.push(new Student(1, 18, "hoang@gmail"));
students.push(new Student(2, 19, "h@gmail"));
students.push(new Student(3, 20, "e@gmail"));
for (let student of students) {
    student.displayInfo();
}
