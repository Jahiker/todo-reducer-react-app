# TODO REDUCER APP

## QUE SON LOS REDUCERS?

- Es una funcion pura para manejo de estado
- No debe tener efectos secundarios
- No debe realizar tareas asincronas
- Debe retornar un nuevo estado
- No debe llamar al localStorage o el sessionStorage
- No debe requerir mas que una accion que puede tener un argumento

``` javascript
const initialTodos = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}]

const todoReducer = (state = initialTodos, action = {}) => {
    if (action.type === "[APP] add") {
    return [...state, action.payload];
  }
    return state;
}

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};

const addTodoAction = {
  type: "[APP] add",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);
```

- La idea de hacer esto es centralizar toda la logica de tratameinto del estado de la app
