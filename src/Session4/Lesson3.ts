interface Student{
    name:string,
    age:number,
    email:string
}
function printStudent(student:Student):void{
    console.log(`Ten toi la ${student.name},tôi ${student.age} tuổi và email của tôi là ${student.email}`);
}
