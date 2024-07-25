/* eslint-disable react/prop-types */
export default function TodoList({
  todo,
  todos,
  setTodos,
  setClear,
  handleFocus,
  mode,
  light,
}) {
  function deleteTodo() {
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  }

  function editTodo() {
    const editTodo = todo.todo;
    setClear(editTodo);
    handleFocus();
    deleteTodo();
  }

  function changeState(id) {
    setTodos(todos.map((t) => (t.id === id ? { ...t, state: !t.state } : t)));
  }

  return (
    <li
      className={` w-11/12 h-14 flex  gap-1 px-2 py-4  items-center justify-between  rounded-md  ${
        mode === light
          ? "bg-slate-100 text-slate-950 font-bold"
          : "bg-slate-900"
      }`}
    >
      <div className="flex items-center">
        <div
          className={`border w-6 h-6 flex  rounded-full  cursor-pointer mr-1 mb-1 items-center px-1 pt-1 ${
            mode === light ? "border-slate-950 border-2" : ""
          }`}
          onClick={() => changeState(todo.id)}
        >
          {todo.state ? "✓" : ""}
        </div>
        <span
          className={`ml-1 ${todo.state ? "line-through text-slate-700" : ""}`}
        >
          {todo.todo}
        </span>
      </div>
      <div className="flex text-md items-center  ">
        <span className="mx-1 text-xl cursor-pointer" onClick={editTodo}>
          ✏️
        </span>
        <span className="text-xl font-thin cursor-pointer" onClick={deleteTodo}>
          ✖️
        </span>
      </div>
    </li>
  );
}
