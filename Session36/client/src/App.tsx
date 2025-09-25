import { useEffect, useState } from "react";
import axios from "axios";
import FilterControls from "../src/component/FilterControls";
import TaskForm from "../src/component/TaskForm";
import TaskItem from "../src/component/TaskItem";
import Loading from "../src/component/Loading"; 

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
}

const API_URL = "http://localhost:8080/TaskList";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
    search: "",
  });

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const res = await axios.get<Task[]>(API_URL);
        setTasks(res.data);
      } catch (err) {
        console.error("Lỗi khi load dữ liệu:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const handleAdd = async (title: string, priority: "low" | "medium" | "high") => {
    const newTask: Omit<Task, "id"> = { title, completed: false, priority };
    const res = await axios.post<Task>(API_URL, newTask);
    setTasks([...tasks, res.data]);
  };

  const handleToggle = async (id: number) => {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    const updated = { ...task, completed: !task.completed };
    await axios.put(`${API_URL}/${id}`, updated);
    setTasks(tasks.map((t) => (t.id === id ? updated : t)));
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    setTasks(tasks.filter((t) => t.id !== id));
  };
const handleUpdate = async (id: number, title: string, priority: "low" | "medium" | "high") => {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  const updated = { ...task, title, priority };
  await axios.put(`${API_URL}/${id}`, updated);

  setTasks(tasks.map((t) => (t.id === id ? updated : t)));
  setEditingTask(null); 
};

  const filteredTasks = tasks.filter((t) => {
    const matchStatus =
      filters.status === "all" ||
      (filters.status === "completed" && t.completed) ||
      (filters.status === "active" && !t.completed);

    const matchPriority = filters.priority === "all" || t.priority === filters.priority;
    const matchSearch = t.title.toLowerCase().includes(filters.search.toLowerCase());

    return matchStatus && matchPriority && matchSearch;
  });

 return (
  <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
    <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>

    <TaskForm
      onAdd={handleAdd}
      onUpdate={handleUpdate}
      editingTask={editingTask}
      existingTitles={tasks.map((t) => t.title.toLowerCase())}
    />

    <FilterControls
      status={filters.status}
      priority={filters.priority}
      search={filters.search}
      onStatusChange={(status) => setFilters({ ...filters, status })}
      onPriorityChange={(priority) => setFilters({ ...filters, priority })}
      onSearchChange={(search) => setFilters({ ...filters, search })}
    />

    {loading ? (
      <Loading />
    ) : (
      <div>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            {...task}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={setEditingTask}
          />
        ))}
      </div>
    )}
  </div>
);
}

export default App;
