"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let allStudents = [];
class Classroom {
    constructor() {
        this.students = [];
    }
    //Hien thi danh sach hoc sinh
    showStudents() {
        if (this.students.length === 0) {
            console.log("Lop hien khong co hoc sinh");
            return;
        }
        console.log("Danh sach hoc sinh la: ");
        this.students.forEach((student) => {
            console.log(`ID: ${student.getId()},Ten: ${student.getName()}`);
        });
    }
    //Them hoc sinh
    addStudent(student) {
        this.students.push(student);
    }
    //Loc hoc sinh theo ID
    filterStudent(id) {
        return this.students.filter((student) => student.getId() === id);
    }
    //Them hoc sinh tu mang allStudents vao lop hoc
    addStudentInClass(studentId) {
        const index = allStudents.findIndex((s) => s.getId() === studentId);
        if (index !== -1) {
            this.students.push(allStudents[index]);
            allStudents.splice(index, 1);
        }
        else {
            console.log(`Khong tim thay hoc sinh voi ID:${studentId}`);
        }
    }
}
allStudents.push(new Student(1, "Nguyen Văn A"), new Student(2, "Nguyen Thị B"), new Student(3, "Nguyen Văn C"), new Student(4, "Nguyen Thị D"), new Student(5, "Nguyen Văn E"), new Student(6, "Nguyen Thị F"));
const class1 = new Classroom();
const class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);
console.log("Lop 1");
class1.showStudents();
console.log("Lop 2");
class2.showStudents();
console.log("Hoc sinh con lai la:");
console.log(allStudents);
