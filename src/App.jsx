import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar la piedra del tiempo",
    done: false,
  },
];

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      <h1 className="p-3">TodoApp: {todos?.length} - <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            {todos?.map(todo => (
              <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span className="align-self-center">{todo.description}</span>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <input
            type="text"
            placeholder="Que hay que hacer?"
            className="form-control my-3"
          />
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
