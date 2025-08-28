import  { useReducer, useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
};

type Action =
  | { type: "ADD"; payload: string }
  | { type: "REMOVE"; payload: number }
  | { type: "INIT"; payload: Todo[] };

const reducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "INIT":
      return action.payload;
    case "ADD":
      { const newTodo: Todo = { id: Date.now(), title: action.payload };
      const updatedTodos = [...state, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos; }
    case "REMOVE":
      { const filtered = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(filtered));
      return filtered; }
    default:
      return state;
  }
};

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      dispatch({ type: "INIT", payload: JSON.parse(data) });
    }
  }, []);

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  const handleRemove = (id: number) => {
    const confirmed = window.confirm("Bạn có chắc muốn xóa công việc này?");
    if (confirmed) {
      dispatch({ type: "REMOVE", payload: id });
    }
  };

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <button
        onClick={handleAdd}
        style={{
          marginBottom: "20px",
          width: "100%",
          padding: "8px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Thêm công việc
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {state.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
              border: "1px solid #ddd",
              padding: "6px",
              borderRadius: "4px",
            }}
          >
            {todo.title}
            <button
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "4px 8px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => handleRemove(todo.id)}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
