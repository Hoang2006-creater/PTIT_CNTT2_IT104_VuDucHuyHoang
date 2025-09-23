import {
  Button,
  MenuItem,
  Select,
  TextField,
  type SelectChangeEvent,
} from "@mui/material";
import React, { useRef, useState } from "react";
import type { Student } from "../utils/types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/reducer/store";

interface StudentFormProps {
  onSubmit: (student: Student) => void;
}

type InputChangeEvent =
  | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type FormChangeEvent = InputChangeEvent | SelectChangeEvent;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StudentForm: React.FC<StudentFormProps> = ({ onSubmit }) => {
  const students = useSelector((state: RootState) => state.students);
  const dispatch = useDispatch();

  const [form, setForm] = useState<Student>({
    id: "",
    name: "",
    age: 0,
    gender: "Nam",
    birthday: "",
    hometown: "",
    address: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const idRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: FormChangeEvent) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    const today = new Date();

    if (!form.id.trim()) newErrors.id = "Mã sinh viên không được để trống";
    else if (students.some((s) => s.id === form.id))
      newErrors.id = "Mã sinh viên đã tồn tại";

    if (!form.name.trim()) newErrors.name = "Tên sinh viên không được để trống";
    else if (
      students.some(
        (s) => s.name.toLowerCase() === form.name.toLowerCase()
      )
    )
      newErrors.name = "Tên sinh viên đã tồn tại";

    if (!form.age || form.age < 0)
      newErrors.age = "Tuổi phải lớn hơn hoặc bằng 0";

    if (!form.birthday) newErrors.birthday = "Ngày sinh không được bỏ trống";
    else if (new Date(form.birthday) > today)
      newErrors.birthday = "Ngày sinh không hợp lệ";

   if (!(form.hometown ?? "").trim())
      newErrors.hometown = "Nơi sinh không được để trống";

    if (!(form.address??"").trim())
      newErrors.address = "Địa chỉ không được để trống";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    dispatch({ type: "ADD_STUDENT", payload: form });
    setForm({
      id: "",
      name: "",
      age: 0,
      gender: "Nam",
      birthday: "",
      hometown: "",
      address: "",
    });
    setErrors({});
    idRef.current?.focus();
  };

  return (
    <div className="w-1/3 p-4 border rounded-xl shadow">
      <h2 className="font-semibold mb-4">Thông Tin Sinh Viên</h2>
      <div className="flex flex-col gap-4">
        <TextField
          label="Mã sinh viên"
          name="id"
          value={form.id}
          onChange={handleChange}
          inputRef={idRef}
          error={!!errors.id}
          helperText={errors.id}
          fullWidth
        />
        <TextField
          label="Tên sinh viên"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
        />
        <TextField
          label="Tuổi"
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          error={!!errors.age}
          helperText={errors.age}
          fullWidth
        />
        <Select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="Nam">Nam</MenuItem>
          <MenuItem value="Nữ">Nữ</MenuItem>
        </Select>
        <TextField
          type="date"
          label="Ngày sinh"
          name="birthday"
          value={form.birthday}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
          error={!!errors.birthday}
          helperText={errors.birthday}
        />
        <TextField
          label="Nơi sinh"
          name="hometown"
          value={form.hometown}
          onChange={handleChange}
          error={!!errors.hometown}
          helperText={errors.hometown}
          fullWidth
        />
        <TextField
          label="Địa chỉ"
          name="address"
          value={form.address}
          onChange={handleChange}
          error={!!errors.address}
          helperText={errors.address}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default StudentForm;
