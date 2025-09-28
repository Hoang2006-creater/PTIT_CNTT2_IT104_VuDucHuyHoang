import axios from "axios";
import type { Student } from "../types";

const API_URL = "http://localhost:3000/students";

export const studentApi = {
  getAll: () => axios.get<Student[]>(API_URL),
  create: (data: Omit<Student, "id">) => axios.post<Student>(API_URL, data),
  update: (id: string | number, data: Student) =>
    axios.put<Student>(`${API_URL}/${id}`, data),
  delete: (id: string | number) => axios.delete(`${API_URL}/${id}`),
};
