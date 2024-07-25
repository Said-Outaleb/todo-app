/* eslint-disable react/prop-types */
import SortTodos from "./SortTodos";
import TodoList from "./TodoList";
import TodoStats from "./TodoStats";
import AddTodo from "./AddTodo";

import { useEffect, useRef, useState } from "react";

export default function Todo({ light, dark, mode }) {
  //Mode

  //Variabales
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("list")) || []
  );

  const [clear, setClear] = useState();

  const isFocus = useRef(null);

  const [completed, setCompleted] = useState(
    todos.filter((todo) => todo.state === true)
  );

  const [active, setActive] = useState(
    todos.filter((todo) => todo.state === false)
  );

  const [filter, setFilter] = useState("all");

  // Hooks
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
    setActive(todos.filter((todo) => todo.state === false));
    setCompleted(todos.filter((todo) => todo.state === true));
  }, [todos]);

  //Functions
  function createTodo(e) {
    if (e.key === "Enter" && clear.trim() !== "") {
      setTodos([
        ...todos,
        { todo: e.target.value.trim(), id: new Date().getTime(), state: false },
      ]);
      console.log(todos);
      setClear("");
    }
  }

  function handleFocus() {
    if (isFocus.current) {
      isFocus.current.focus();
    }
  }

  function display() {
    if (filter === "all") {
      return todos.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          setClear={setClear}
          handleFocus={handleFocus}
          mode={mode}
          light={light}
        />
      ));
    }
    if (filter === "completed") {
      return completed.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          setClear={setClear}
          handleFocus={handleFocus}
          mode={mode}
          light={light}
        />
      ));
    }
    if (filter === "active") {
      return active.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          setClear={setClear}
          handleFocus={handleFocus}
          mode={mode}
          light={light}
        />
      ));
    }
  }

  function changeFilter(filterName) {
    setFilter(filterName);
  }
  return (
    <div
      className={`${
        mode === dark ? "bg-slate-950" : "bg-slate-100"
      } w-full max-h-full flex flex-col gap-4 items-center justify-center  rounded-md pt-2 pb-2`}
    >
      <AddTodo
        todos={todos}
        setTodos={setTodos}
        clear={clear}
        setClear={setClear}
        createTodo={createTodo}
        isFocus={isFocus}
        light={light}
        mode={mode}
      />
      {display()}

      <TodoStats todos={todos} setTodos={setTodos} light={light} mode={mode} />
      <SortTodos
        changeFilter={changeFilter}
        filter={filter}
        light={light}
        mode={mode}
      />
    </div>
  );
}
