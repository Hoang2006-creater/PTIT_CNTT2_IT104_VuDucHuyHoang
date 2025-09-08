import TodoItem from "./TodoItem";
import type { Todo } from "./TodoApp";

interface Props {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, newText: string) => void;
}

export default function TodoList({ todos, toggleComplete, deleteTodo, updateTodo }: Props) {
  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}
