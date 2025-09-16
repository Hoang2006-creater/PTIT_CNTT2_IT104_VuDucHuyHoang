import { useEffect, useState } from "react";

export default function GetAllStudent() {
  type StudentType = {
    id: number;
    student_name: string;
    email: string;
    address: string;
    phone: string;
    status: boolean;
    created_at: string;
  };

  const [students, setStudents] = useState<StudentType[]>([]);

  const getAllStudent = async () => {
    try {
      const response = await fetch("http://localhost:3000/students");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    getAllStudent();
  }, []);

  return (
    <div style={{ margin: 20 }}>
      <h2
        style={{
          backgroundColor: "#2c3e50",
          color: "white",
          padding: 10,
        }}
      >
        Quản lý sinh viên
      </h2>

      <table
        border={1}
        width="100%"
        cellPadding={10}
        style={{ borderCollapse: "collapse" }}
      >
        <thead style={{ backgroundColor: "#f2f2f2" }}>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((s) => (
              <tr key={s.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{s.student_name}</td>
                <td>{s.email}</td>
                <td>{s.address}</td>
                <td>{s.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                Không có dữ liệu
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <p>Hiển thị {students.length}/10 bản ghi</p>
    </div>
  );
}
