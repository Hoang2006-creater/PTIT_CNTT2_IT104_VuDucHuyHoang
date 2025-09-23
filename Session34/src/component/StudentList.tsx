import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import type { Student } from "../utils/types";
import { useDispatch } from "react-redux";

interface StudentListProps {
  students: Student[];
}

const StudentList: React.FC<StudentListProps> = ({ students }) => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [openEdit, setOpenEdit] = useState(false);
  const [form, setForm] = useState<Student | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleOpenEdit = (student: Student) => {
    setForm(student);
    setErrors({});
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setForm(null);
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!form?.id.trim()) newErrors.id = "Mã sinh viên không được để trống";
    else if (
      students.some((s) => s.id === form.id && s.id !== form.id)
    )
      newErrors.id = "Mã sinh viên đã tồn tại";

    if (!form?.name.trim()) newErrors.name = "Tên sinh viên không được để trống";
    else if (
      students.some((s) => s.name === form.name && s.id !== form.id)
    )
      newErrors.name = "Tên sinh viên đã tồn tại";

    if (!form?.age || form.age < 0) newErrors.age = "Tuổi phải >= 0";

    if (!form?.birthday) newErrors.birthday = "Ngày sinh không được để trống";
    else if (new Date(form.birthday) > new Date())
      newErrors.birthday = "Ngày sinh không được ở tương lai";

    if (!form?.hometown?.trim())
      newErrors.hometown = "Nơi sinh không được để trống";

    if (!form?.address?.trim())
      newErrors.address = "Địa chỉ không được để trống";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitEdit = () => {
    if (!form) return;
    if (!validate()) return;

    dispatch({ type: "UPDATE_STUDENT", payload: form });
    handleCloseEdit();
  };

  return (
    <div className="flex flex-col gap-4">
      <TextField
        label="Tìm kiếm theo tên"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
      />

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Mã sinh viên</TableCell>
              <TableCell>Tên sinh viên</TableCell>
              <TableCell>Tuổi</TableCell>
              <TableCell>Giới tính</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStudents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center" style={{ color: "red" }}>
                  Không có sinh viên nào được tìm thấy
                </TableCell>
              </TableRow>
            ) : (
              filteredStudents.map((s, i) => (
                <TableRow key={s.id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{s.id}</TableCell>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.age}</TableCell>
                  <TableCell>{s.gender}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={() => handleOpenEdit(s)}
                      >
                        Sửa
                      </Button>
                      <Button variant="contained" color="success">
                        Xóa
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openEdit} onClose={handleCloseEdit} maxWidth="sm" fullWidth>
        <DialogTitle>Cập nhật sinh viên</DialogTitle>
        <DialogContent className="flex flex-col gap-4 mt-2">
          <TextField
            label="Mã sinh viên"
            value={form?.id || ""}
            onChange={(e) => setForm({ ...form!, id: e.target.value })}
            error={!!errors.id}
            helperText={errors.id}
          />
          <TextField
            label="Tên sinh viên"
            value={form?.name || ""}
            onChange={(e) => setForm({ ...form!, name: e.target.value })}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Tuổi"
            type="number"
            value={form?.age || ""}
            onChange={(e) =>
              setForm({ ...form!, age: Number(e.target.value) })
            }
            error={!!errors.age}
            helperText={errors.age}
          />
          <TextField
            label="Ngày sinh"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={form?.birthday || ""}
            onChange={(e) => setForm({ ...form!, birthday: e.target.value })}
            error={!!errors.birthday}
            helperText={errors.birthday}
          />
          <TextField
            label="Nơi sinh"
            value={form?.hometown || ""}
            onChange={(e) => setForm({ ...form!, hometown: e.target.value })}
            error={!!errors.hometown}
            helperText={errors.hometown}
          />
          <TextField
            label="Địa chỉ"
            value={form?.address || ""}
            onChange={(e) => setForm({ ...form!, address: e.target.value })}
            error={!!errors.address}
            helperText={errors.address}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Hủy</Button>
          <Button onClick={handleSubmitEdit} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default StudentList;
