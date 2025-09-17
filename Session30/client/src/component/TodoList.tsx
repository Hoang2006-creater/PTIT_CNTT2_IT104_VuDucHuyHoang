import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function ToDoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);

  const [showCompleteModal, setShowCompleteModal] = useState(false);

  const [newTask, setNewTask] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const [showEditModal, setShowEditModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [editTitle, setEditTitle] = useState("");
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    setLoading(true);
    axios.get("http://localhost:3000/tasks").then((res) => {
      setTasks(res.data);
      setLoading(false);
    });
  };
  const handleAddTask = () => {
    const trimmed = newTask.trim();
    if (trimmed === "") {
      alert("Tên công việc không được để trống!");
      return;
    }
    const isDuplicate = tasks.some(
      (task) => task.title.toLowerCase() === trimmed.toLowerCase()
    );
    if (isDuplicate) {
      alert("Tên công việc đã tồn tại!");
      return;
    }
    axios
      .post("http://localhost:3000/tasks", { title: trimmed, completed: false })
      .then(() => {
        setNewTask("");
        inputRef.current?.focus();
        fetchTasks();
      });
  };
  const handleDeleteClick = (id: number) => {
    setTaskToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (taskToDelete !== null) {
      axios.delete(`http://localhost:3000/tasks/${taskToDelete}`).then(() => {
        setShowDeleteModal(false);
        setTaskToDelete(null);
        fetchTasks();
      });
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setTaskToDelete(null);
  };
  const toggleTask = (task: Task) => {
    axios
      .patch(`http://localhost:3000/tasks/${task.id}`, {
        completed: !task.completed,
      })
      .then(() => {
        fetchTasks();
        const allCompleted = tasks.every((t) =>
          t.id === task.id ? !task.completed : t.completed
        );
        if (allCompleted) setShowCompleteModal(true);
      });
  };
  const handleEditClick = (task: Task) => {
    setTaskToEdit(task);
    setEditTitle(task.title);
    setShowEditModal(true);
  };

  const confirmEdit = () => {
    if (!taskToEdit) return;
    const trimmed = editTitle.trim();
    if (trimmed === "") {
      alert("Tên công việc không được để trống!");
      return;
    }
    const isDuplicate = tasks.some(
      (task) =>
        task.title.toLowerCase() === trimmed.toLowerCase() &&
        task.id !== taskToEdit.id
    );
    if (isDuplicate) {
      alert("Tên công việc đã tồn tại!");
      return;
    }
    axios
      .patch(`http://localhost:3000/tasks/${taskToEdit.id}`, {
        title: trimmed,
      })
      .then(() => {
        setShowEditModal(false);
        setTaskToEdit(null);
        fetchTasks();
      });
  };

  const cancelEdit = () => {
    setShowEditModal(false);
    setTaskToEdit(null);
  };

  return (
    <div className="w-[460px] mx-auto mt-10 p-6 shadow-lg text-center">
      <h1 className="text-xl font-bold mb-4">Quản lý công việc</h1>
      <div className="flex gap-2 mb-4 flex-col shadow-lg mx-auto p-4">
        <input
          ref={inputRef}
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nhập tên công việc"
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-600 text-white px-4 rounded p-2"
        >
          Thêm công việc
        </button>
      </div>
      {loading ? (
        <p className="text-gray-500">Đang tải dữ liệu...</p>
      ) : (
        <div className="max-h-60 overflow-y-auto mb-4">
          <ul className="text-left">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between shadow-md mx-auto p-1 mb-2"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task)}
                  />
                  <span className={task.completed ? "line-through" : ""}>
                    {task.title}
                  </span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEditClick(task)}
                    className="text-blue-600"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteClick(task.id)}
                    className="text-red-600"
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded shadow-lg w-[300px] text-center">
            <h2 className="text-lg font-bold mb-4">Xác nhận xóa</h2>
            <p className="mb-4">Bạn có chắc muốn xóa công việc này?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={cancelDelete}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Hủy
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
      {showCompleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded shadow-lg w-[300px] text-center">
            <h2 className="text-lg font-bold mb-4">Hoàn thành công việc </h2>
            <button
              onClick={() => setShowCompleteModal(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white p-6 rounded shadow-lg w-[350px] text-center">
            <h2 className="text-lg font-bold mb-4">Cập nhật công việc</h2>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="border p-2 rounded w-full mb-4"
            />
            <div className="flex justify-center gap-4">
              <button
                onClick={cancelEdit}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Hủy
              </button>
              <button
                onClick={confirmEdit}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
