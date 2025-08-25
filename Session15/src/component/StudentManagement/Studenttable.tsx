
import { Component } from "react";
import StudentRow from "./StudentRow";
import type { Student } from "../StudentPage";

type Props = {
  students: Student[];
};

export default class StudentTable extends Component<Props> {
  render() {
    return (
      <table border={1} cellPadding={10} style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {this.props.students.map((s, i) => (
            <StudentRow key={s.id} student={s} index={i} />
          ))}
        </tbody>
      </table>
    );
  }
}
