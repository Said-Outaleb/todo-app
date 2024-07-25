/* eslint-disable react/prop-types */
export default function SortTodos({ changeFilter, filter, light, mode }) {
  return (
    <div
      className={`text-slate-600 cursor-pointer bg-slate-800  flex justify-around w-11/12 min-h-12 items-center rounded-md py-4  bottom-5 mb-4 ${
        mode === light ? "bg-slate-100 text-slate-950" : ""
      }`}
    >
      <button
        className={`capitalize ${
          filter === "all" ? "text-blue-600" : ""
        } 0' : ''}`}
        onClick={() => changeFilter("all")}
      >
        all
      </button>
      <button
        className={`capitalize ${filter === "active" ? "text-blue-600" : ""}`}
        onClick={() => changeFilter("active")}
      >
        active
      </button>
      <button
        className={`capitalize ${
          filter === "completed" ? "text-blue-600" : ""
        }`}
        onClick={() => changeFilter("completed")}
      >
        completed
      </button>
    </div>
  );
}
