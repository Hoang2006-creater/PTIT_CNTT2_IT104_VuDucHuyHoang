// import{ useEffect, useState } from 'react'
// import axios from 'axios';
// export default function GetAllStudent() {
//     type StudentType={
//         id:number;
//         student_name:string;
//         email:string;
//         address:string;
//         phone:string;
//         status:boolean;
//         created_at:string;
//     }
// const[students,setStudents]=useState<StudentType[]>([])
// const getAllStudent=async()=>{
//     fetch("http://localhost:3000/students")
//     .then((respone)=>respone.json())
//     .then((data)=>{
//         console.log(data);
//         setStudents(data)
//     })
//     .catch((error)=>console.log("Error",error))
// }
// const getStudentById=async(id:number)=>{
//     try{
//         const respone=await axios.get(
//               `http://localhost:3000/students/${id}`
//         )
//         if(respone.data){
//             console.log("Sinh vien tim thay",respone.data);
//         }else{
//             console.log("Khong tim thay sinh vien");
//         }
//     } catch (error: unknown) {
//   if (axios.isAxiosError(error)) {
//     if (error.response && error.response.status === 404) {
//       console.log("Không tìm thấy bản ghi");
//     } else {
//       console.error("Lỗi khi gọi API:", error.message);
//     }
//   } else {
//     console.error("Lỗi không xác định:", error);
//   }
// }
// }
// //Them moi
// const createStudent=async()=>{
//     const newStudent:Omit<StudentType,"id">={
//     student_name: "Nguyen Van A",
//     email: "vana@example.com",
//     address: "Ha Noi",
//     phone: "0123456789",
//     status: true,
//     created_at: new Date().toISOString(),
//     }
//  try {
//       const response = await axios.post<StudentType>(
//         "http://localhost:3000/students",
//         newStudent
//       );
//       console.log("Sinh viên đã được thêm:", response.data);
//     } catch (error) {
//       console.error("Lỗi khi thêm sinh viên:", error);
//     }
//   };
// useEffect(() => {
//   getAllStudent();  
//   getStudentById(2); 
//   getStudentById(999);
//   createStudent() 
// },[]);

//   return (
//     <div> </div>
//   )
// }
