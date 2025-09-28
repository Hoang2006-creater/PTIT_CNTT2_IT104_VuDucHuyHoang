import React, { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import StudentForm from "../src/component/StudentForm";
import StudentList from "../src/component/StudentList";
import StudentSearchSortFilter from "../src/component/StudentSearchSortFilter";
import { studentApi } from "../src/api/studentApi";
import type { Student } from "../src/types";

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Student | undefined>(undefined);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const res = await studentApi.getAll();
      setStudents(res.data);
    } finally {
      setLoading(false);
    }
  };
  const validate = (data: Omit<Student, "id">, editingId?: string | number) => {
    if (!data.name.trim()) return "Tên không được để trống";
    if (students.some(s => s.name === data.name && s.id !== editingId))
      return "Tên sinh viên đã tồn tại";
    if (!data.age || data.age < 0) return "Tuổi không hợp lệ";
    if (!data.grade.trim()) return "Lớp học không được để trống";
    return null;
  };

  const handleAdd = async (data: Omit<Student, "id">) => {
    const err = validate(data);
    if (err) return alert(err);
    await studentApi.create(data);
    fetchStudents();
    setOpenForm(false);
  };

  const handleUpdate = async (student: Student) => {
    const err = validate(student, student.id);
    if (err) return alert(err);
    await studentApi.update(student.id, student);
    fetchStudents();
    setOpenForm(false);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Xác nhận xóa học sinh?")) return;
    await studentApi.delete(id);
    fetchStudents();
  };
  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🎓 Student Manager</h1>

      <div className="flex gap-4 mb-4">
        <Button variant="contained" color="primary" onClick={() => setOpenForm(true)}>
          Add Student
        </Button>
      </div>

      <StudentSearchSortFilter
        search={search}
        gradeFilter="all"
        sortBy="name"
        sortDir="asc"
        grades={[]}
        onSearchChange={setSearch}
        onGradeChange={() => {}}
        onSortChange={() => {}}
        onClear={() => setSearch("")}
      />

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <CircularProgress />
        </div>
      ) : (
        <StudentList
          students={filtered}
          onEdit={(s) => {
            setEditing(s);
            setOpenForm(true);
          }}
          onDelete={handleDelete}
        />
      )}

      <StudentForm
        open={openForm}
        initial={editing}
        onClose={() => setOpenForm(false)}
        onSubmit={(data) => {
         if (editing) {
        handleUpdate({ ...(editing as Student), ...data });
      } else {
      handleAdd(data);
     }
        }}
      />
    </div>
  );
};

export default App;
