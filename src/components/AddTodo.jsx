import { useState, memo } from "react";
import { useForm } from "../hook/useForm";

export const AddTodo = memo(({ onAddTodo }) => {
  const { onInputChange, onResetForm, description, isValid } = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      const newTodo = {
        id: new Date().getTime(),
        description: description,
        done: false,
      };

      onAddTodo(newTodo);
      onResetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className={`form-control ${!isValid && "border-danger"}`}
        name="description"
        value={description}
        onChange={onInputChange}
        required
        autoComplete="off"
        data-error="Ingrese una descripción"
      />
      <button type="submit" className="btn btn-outline-primary w-100 my-3">
        Agregar
      </button>
    </form>
  );
});
