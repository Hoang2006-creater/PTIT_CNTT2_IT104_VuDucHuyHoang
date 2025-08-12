interface Person{
    name:string,
    age:number
}
interface EmployeeInfo{
    employeeId :string,
    department:string
}
type StaffMember =Person & EmployeeInfo
function  printStaffInfo(staff:StaffMember):void{
    console.log(`${staff.name}(${staff.age} tuoi), Ma nhan vien ${staff.employeeId}-Phong: ${staff.department}`);
}
const staffMember:StaffMember={
    name:"Nguyễn Văn A",
    age:28,
    employeeId:"EMP001",
    department:"Ke toan"
}
printStaffInfo(staffMember)