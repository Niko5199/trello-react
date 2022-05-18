import { useState } from "react";

export default function Todo({ todo, onUpdate }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [todoTitle, setTodoTitle] = useState(todo.title);
    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setTodoTitle(value);
    }
    function handleClick(e) {
      onUpdate(item.id, item.title);
      setIsEdit(false);
    }

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoTitle}
          className="todoInput"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Update</button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        {todo.title} <button onClick={() => setIsEdit(true)}>Editar</button>{" "}
        <button className="button">Borrar</button>{" "}
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}
