
import { Component } from "react";
import Toolbar from "./StudentManagement/Toolbar";
import StudentTable from "./StudentManagement/Studenttable";
import Pagination from "./StudentManagement/Pagination";
export type Student = {
  id: string;
  name: string;
  dob: string;
  email: string;
  status: "active" | "inactive";
};

type State = {
  students: Student[];
};

export default class StudentPage extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      students: [
        {
          id: "SV001",
          name: "Nguyễn Văn A",
          dob: "21/12/2023",
          email: "nva@gmail.com",
          status: "active",
        },
        {
          id: "SV002",
          name: "Nguyễn Thị B",
          dob: "21/11/2022",
          email: "ntb@gmail.com",
          status: "inactive",
        },
      ],
    };
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Quản lý sinh viên</h2>
        <Toolbar />
        <StudentTable students={this.state.students} />
        <Pagination />
      </div>
    );
  }
}
