import { useState } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";

export default function App() {
  const light = "light";
  const dark = "dark";
  const [mode, setMode] = useState(light);
  return (
    <div
      className={`capitalize container mx-auto p-5 my-5 rounded-md relative text-slate-200 ${
        mode === dark ? "bg-slate-900 " : "bg-slate-300"
      }`}
    >
      <Header mode={mode} setMode={setMode} light={light} dark={dark} />
      <Todo light={light} dark={dark} mode={mode} />
      <span
        className={`flex items-center justify-center my-4  ${
          mode === light ? "text-slate-950 font-semibold" : ""
        }`}
      >
        Created by{" "}
        <a
          href="https://x.com/Said_Outalb" target="_blank"
          className={`ml-1 hover:text-blue-400 ${
            mode === light ? "font-bold hover:text-blue-600" : ""
          }`}
        >
          @Said_Outaleb
        </a>
      </span>
    </div>
  );
}
