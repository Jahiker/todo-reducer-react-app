import { memo } from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = memo(({ todos, onDeleteTodo }) => {
  return (
    <div className="col-7">
      <ul className="list-group">
        {todos.length === 0 && (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="align-self-center">No hay tareas por hacer</span>
          </li>
        )}
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
        ))}
      </ul>
    </div>
  );
});
