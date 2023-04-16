import { useTodo } from "./hook/useTodo";

import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";

function App() {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  } = useTodo();

  return (
    <div>
      <h1 className="p-3">
        TodoApp: {todosCount} - <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <TodoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleTodo}
        />
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <AddTodo onAddTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
