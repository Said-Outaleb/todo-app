import { useEffect, useState } from "react";

export default function TodoStats({ todos, setTodos, light, mode }) {
  const [leftItem, setLeftItem] = useState(0);

  useEffect(() => {
    const left = todos.filter((item) => item.state === false);
    setLeftItem(left.length);
  }, [todos]);

  function clearCompleted() {
    const completed = todos.filter((todo) => todo.state === false);
    setTodos(completed);
  }

  return (
    <div
      className={`flex justify-around  mx-4 w-11/12   py-4  mt-4  mb-1   rounded-md ${
        mode === light
          ? "bg-slate-100 text-slate-950"
          : "bg-slate-800 text-slate-600"
      }`}
    >
      <div>
        {leftItem} {leftItem < 2 ? "item" : "items"} left
      </div>
      <div
        className="cursor-pointer transition duration-300  hover:text-blue-500"
        onClick={clearCompleted}
      >
        clear completed
      </div>
    </div>
  );
}
