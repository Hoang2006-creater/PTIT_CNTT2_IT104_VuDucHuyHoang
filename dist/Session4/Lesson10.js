"use strict";
function getCompletedStudents(course) {
    return course.students.filter((student) => {
        return student.hasCompeleted === true;
    });
}
function calculateAverageScore(course) {
    //Loc sinh vien co diem ra mang rieng
    let scoreStudents = course.students.filter((student) => {
        return typeof student.finalScore === "number";
    });
    if (scoreStudents.length === 0) {
        return null;
    }
    //Tinh diem trung binh
    //Tinh tong cac sinh vien co diem 
    let total = scoreStudents.reduce((total, student) => {
        if (student.finalScore) {
            return total + student.finalScore;
        }
        return total;
    }, 0);
    let avg = total / course.students.length;
    return avg;
}
function printCourseReport(manager) {
    manager.course.forEach((course, index) => {
        console.log(`${index + 1}.${course.title}GV ${course.instructor}`);
        console.log(`Tong hoc vien${course.students.length}`);
        console.log(`Hoan thanh ${getCompletedStudents(course).length}`);
        let avgScore = calculateAverageScore(course);
        if (avgScore != null) {
            console.log(`Trung binh :${avgScore}`);
        }
        console.log(`Trang thai :${course.isActive ? "Dang mo" : "Da dong"}`);
    });
}
