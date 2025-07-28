import style from "./DisplayTodo.module.css";
const DisplayTodo = (props) => {
  let { allTodos } = props;
  return (
    <ul className={style.todoList}>
      {allTodos.length === 0 ? (
        <h1>No todos available...</h1>
      ) : (
        allTodos.map((todo) => (
          <div key={todo.id} className={style.todoItem}>
            <p>{todo.text}</p>
            <div className={style.todoActions}>
              <button>Update</button>
              <button>Delete</button>
            </div>
          </div>
        ))
      )}
    </ul>
  );
};

export default DisplayTodo;
