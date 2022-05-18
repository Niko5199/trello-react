// * Un hook es una funcion que nos permitira actualizar
// * informacion de nuestras variables o mejor dicho el estado

// * E/p: cuando suceda un evento, nosotros podamos actualizar
// * El estado, y automaticamente pueda React cambiar el valor o,
// * acutalizar la interfaz

// * useState -> es una funcion que nos permite definir un estado inicial,
// * para despues empezar a manipularlo.

// * Value return ->  un arreglo de 2 entradas

// * Sintaxis: El primer elemento es el estado inicial, y el segundo
// * es una funcion que se utiliza para actualizar el estado inicial

// * const [state, setState] = useState(initialstate)

import { useState } from "react";
import Todo from "./Todo";

export default function TodoApp() {
  const [title, setTitle] = useState("Hola");
  // * Definimos estado para guardar los estados
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  function handleUpdate(id, title) {}

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          type="submit"
          value="Create Todo"
          className="buttonCreate"
        ></input>
        {title}
      </form>

      <div className="todosContainer">
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
}
