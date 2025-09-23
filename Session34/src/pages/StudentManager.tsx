import StudentForm from "../component/StudentForm";
import StudentList from "../component/StudentList";
import Toolbar from "../component/Toolbar";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/reducer/store";
import type { Student } from "../utils/types";


const StudentManagement = () => {
  const students = useSelector((state: RootState) => state.students);
  const dispatch = useDispatch();

  const handleAddStudent = (student: Student) => {
    dispatch({ type: "ADD_STUDENT", payload: student });
  };

  const handleSearch = (keyword: string) => {
    if (keyword) {
      dispatch({ type: "SEARCH_STUDENT", payload: keyword });
    } else {
      dispatch({ type: "RESET_SEARCH" });
    }
  };

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar onSearch={handleSearch} />
        <StudentList students={students} />
      </div>
      <StudentForm onSubmit={handleAddStudent} />
    </div>
  );
};

export default StudentManagement;
