/* eslint-disable react/prop-types */

export default function AddTodo({
  clear,
  setClear,
  createTodo,
  isFocus,
  mode,
  light,
}) {
  return (
    <div className="w-full p-4">
      <input
        className={`w-full min-h-12
        px-2 py-4 placeholder:text-slate-600 outline-none rounded-md capitalize mt-1  ${
          mode === light ? "bg-slate-100 text-slate-950" : "bg-slate-800"
        }`}
        placeholder="Enter a Todo..."
        value={clear}
        onChange={(e) => {
          setClear(e.target.value);
        }}
        onKeyDown={createTodo}
        ref={isFocus}
      />
    </div>
  );
}
