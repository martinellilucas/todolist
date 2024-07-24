import React, { useState } from "react";
import style from "./TaskForm.module.css";

export const TaskForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
  };

  return (
    <form className={style.taskForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={style.taskInput}
        placeholder="Type the new task"
        value={value}
        onChange={handleChange}
      ></input>
      <button type="submit" className={style.taskBtn}>
        ADD
      </button>
    </form>
  );
};
