import { Component} from "react";
class ListCourse extends Component{
     courses:string[]=["HTML","CSS","JavaScript","ReactJS"]
    render() {
         return(
     <div>
      <ol>
         <h2>Danh sach khoa hoc</h2>
         {this.courses.map((course,index)=>(
            <li key={index}>{course}</li>
         ))}
         </ol>
    </div>
    )
    }
   
}
export default ListCourse