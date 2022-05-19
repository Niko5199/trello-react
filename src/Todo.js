import { useState } from "react";

export default function Todo({ todo, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [todoTitle, setTodoTitle] = useState(todo.title);

    function handleChange(e) {
      const value = e.target.value;
      setTodoTitle(value);
    }
    function handleClick(e) {
      if (todoTitle === "") {
        setIsEdit(false);
        return;
      }
      onUpdate(todo.id, todoTitle);
      setIsEdit(false);
    }

    return (
      <form className="todoUpdateForm">
        <input
          type="text"
          value={todoTitle}
          className="todoInput"
          onChange={handleChange}
        />
        <button className="buttonUpdate" onClick={handleClick}>
          Update
        </button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <span className="todoTitle"> {todo.title} </span>
        <button className="button" onClick={() => setIsEdit(true)}>
          Editar
        </button>
        <button
          className="buttonDelete"
          onClick={e => {
            onDelete(todo.id);
          }}
        >
          Borrar
        </button>
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}
