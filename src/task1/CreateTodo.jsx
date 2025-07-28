import style from "./CreateTodo.module.css";

const CreateTodo = (props) => {
  let { todo, handleTodo, handleSubmit } = props;

  return (
    <div className={style.createTodoWrapper}>
      <h1>Todo App</h1>
      <form className={style.formWrapper} onSubmit={handleSubmit}>
        <input className={style.input} type="text" value={todo} onChange={handleTodo}/>
        <button className={style.button}>Add Todo</button>
      </form>
    </div>
  );
};
export default CreateTodo;
