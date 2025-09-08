import { useState } from "react";
import { type Todo } from "./TodoApp";

interface Props {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, newText: string) => void;
}

export default function TodoItem({ todo, toggleComplete, deleteTodo, updateTodo }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (!editText.trim()) return;
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between bg-white text-black px-3 py-2 rounded-lg shadow">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {isEditing ? (
          <input 
            className="border rounded px-2 py-1"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <span className={todo.completed ? "line-through text-gray-500" : ""}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={handleSave} className="text-green-600 hover:text-green-800">
            💾
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-blue-600 hover:text-blue-800">
            ✏️
          </button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="text-red-600 hover:text-red-800">
          ❌
        </button>
      </div>
    </li>
  );
}
