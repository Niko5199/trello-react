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
  const [errorMsg, setErrorMsg] = useState(false);

  function ErrorMsg() {
    function loadErrorMsg(e) {
      e.preventDefault();
      setErrorMsg(false);
    }

    return (
      <div className="error">
        <span> No puedes ingresar espacios en blanco </span>
        <input
          type="button"
          className="button-error"
          onClick={loadErrorMsg}
          value="X"
        ></input>
      </div>
    );
  }

  function ContainerTodo() {
    const [title, setTitle] = useState("");

    // * Definimos estado para guardar los estados
    const [todos, setTodos] = useState([]);
    function handleChange(e) {
      const value = e.target.value;

      setTitle(value);
    }

    function handleSubmit(e) {
      e.preventDefault();

      if (title === "") setErrorMsg(true);

      const newTodo = {
        id: crypto.randomUUID(),
        title,
        completed: false,
      };

      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      setTitle("");
    }

    function handleUpdate(id, title) {
      const temp = [...todos];
      const item = temp.find(item => item.id === id);
      item.title = title;
      setTodos(temp);
    }

    function handleDelete(id) {
      const temp = [...todos];
      const newArr = temp.filter(item => item.id !== id);
      setTodos(newArr);
    }

    return (
      <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
          <input onChange={handleChange} className="todoInput" value={title} />
          <input
            type="submit"
            value="Create Todo"
            className="buttonCreate"
          ></input>
        </form>

        <div className="todosContainer">
          {todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }

  return <>{errorMsg ? <ErrorMsg /> : <ContainerTodo />} </>;
}
