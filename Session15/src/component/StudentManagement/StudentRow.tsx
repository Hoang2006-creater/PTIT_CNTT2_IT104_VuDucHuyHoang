
import { Component } from "react";
import StatusTag from "./StatusTag";
import type { Student } from "../StudentPage";

type Props = {
  student: Student;
  index: number;
};

export default class StudentRow extends Component<Props> {
  render() {
    const { student, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.dob}</td>
        <td>{student.email}</td>
        <td><StatusTag status={student.status} /></td>
        <td>
          <button style={{ marginRight: "5px" }}>Chặn</button>
          <button style={{ marginRight: "5px" }}>Sửa</button>
          <button style={{ color: "red" }}>Xóa</button>
        </td>
      </tr>
    );
  }
}
