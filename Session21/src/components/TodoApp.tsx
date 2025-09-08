import { useEffect, useState } from "react";
import TodoList from "./TodoList";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  // Load từ LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  // Save vào LocalStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo: Todo = { id: Date.now(), text: input.trim(), completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id: number, newText: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-200">
      <div className="bg-pink-500 text-white w-[350px] p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        
        <TodoList 
          todos={todos} 
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo} 
          updateTodo={updateTodo}
        />

        <div className="flex mt-4">
          <input
            className="flex-1 p-2 rounded-l-lg text-black"
            type="text"
            placeholder="Add to the todo list..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
          />
          <button 
            className="bg-pink-700 px-4 py-2 rounded-r-lg hover:bg-pink-800"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
