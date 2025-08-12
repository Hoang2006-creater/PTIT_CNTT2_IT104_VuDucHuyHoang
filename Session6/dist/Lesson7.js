"use strict";
class Students {
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
    setName(newName) {
        this.name = newName;
    }
}
let allStudent = [];
class Classrooms {
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
        const index = allStudent.findIndex((s) => s.getId() === studentId);
        if (index !== -1) {
            this.students.push(allStudent[index]);
            allStudent.splice(index, 1);
        }
        else {
            console.log(`Khong tim thay hoc sinh voi ID:${studentId}`);
        }
    }
    //Xoa hoc sinh khoi lop 
    removeStudent(studentId) {
        const index = this.students.findIndex((s) => s.getId() === studentId);
        if (index !== -1) {
            const removedStudent = this.students.splice(index, 1)[0];
            allStudent.push(removedStudent);
            console.log("Da xoa hoc sinh ");
        }
        else {
            console.log("Khong tim thay hoc sinh");
        }
    }
    //Chinh sua ten hoc sinh
    editStudent(studentId, newName) {
        const student = this.students.find((s => s.getId() === studentId));
        if (student) {
            student.setName(newName);
            console.log(`Đã cập nhật tên cho học sinh ID ${studentId}`);
        }
        else {
            console.log(`Không tìm thấy học sinh với ID: ${studentId} trong lớp`);
        }
    }
}
allStudent.push(new Students(1, "Nguyen Văn A"), new Students(2, "Nguyen Thị B"), new Students(3, "Nguyen Văn C"), new Students(4, "Nguyen Thị D"), new Students(5, "Nguyen Văn E"), new Students(6, "Nguyen Thị F"));
const Class1 = new Classrooms();
const Class2 = new Classrooms();
Class1.addStudentInClass(1);
Class1.addStudentInClass(2);
Class1.addStudentInClass(3);
Class1.addStudentInClass(4);
Class1.addStudentInClass(5);
Class1.addStudentInClass(6);
console.log("Lop 1");
Class1.showStudents();
console.log("Lop 2");
Class2.showStudents();
console.log("Hoc sinh con lai la:");
console.log(allStudent);
