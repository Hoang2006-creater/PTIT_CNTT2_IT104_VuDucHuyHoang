"use strict";
function printStaffInfo(staff) {
    console.log(`${staff.name}(${staff.age} tuoi), Ma nhan vien ${staff.employeeId}-Phong: ${staff.department}`);
}
const staffMember = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Ke toan"
};
printStaffInfo(staffMember);
