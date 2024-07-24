import React, { useState } from "react";
import { TaskForm } from "../TaskForm/TaskForm";
import style from "./List.module.css";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const List = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  return (
    <div className={style.wrapper}>
      <TaskForm addTodo={addTodo} />
      <div className={style.taskList}>
        {todos.map((task) => {
          return (
            <div className={style.taskContainer} key={task.id}>
              <h1 className={style.taskTitle}>{task.task}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
