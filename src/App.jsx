import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";

import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos_v1")) || [];
};

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    console.log(todos);
    localStorage.setItem("todos_v1", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };

    dispatch(action);
  };

  return (
    <div>
      <h1 className="p-3">
        TodoApp: {todos?.length} - <small>pendientes: {todos.filter(todo => todo.done === false).length}</small>
      </h1>
      <hr />

      <div className="row">
        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
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
