import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import DisplayTodo from "./DisplayTodo";
import style from "./TodoWrapper.module.css";

const TodoWrapper = () => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);//[{},{}]

  const handleTodo = (e) => setTodo(e.target.value);

  const HandleSubmit = (e) => {
    e.preventDefault();

    // creating new todo object
    let newTodo = {
      id: Date.now(),
      text: todo,
    };
    console.log(newTodo);//{}

    setAllTodos([...allTodos, newTodo]); // storing all todos

    setTodo(""); // clearing input field
  };

  return (
    <div className={style.todoWrapper}>
      <CreateTodo
        todo={todo}
        handleTodo={handleTodo}
        handleSubmit={HandleSubmit}
      />

      <DisplayTodo allTodos={allTodos} />
    </div>
  );
};

export default TodoWrapper;
