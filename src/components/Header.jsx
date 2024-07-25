/* eslint-disable react/prop-types */
export default function Header({ mode, setMode, light, dark }) {
  function changeMode() {
    if (mode === dark) {
      setMode(light);
    }
    if (mode === light) {
      setMode(dark);
    }
  }
  return (
    <div
      className={`${
        mode === dark ? "bg-slate-950" : "bg-slate-100 text-black"
      } flex justify-around w-full min-h-32 items-center mb-5 rounded-md`}
    >
      <h1 className="font-bold text-3xl uppercase ">todo</h1>
      <img
       src={mode === dark ? "/icon-sun.svg" : "/icon-moon.svg"}


        alt={`${mode === dark ? "sun" : "moon"}`}
        className={` rounded-full p-1 transition duration-300 ${
          mode === light ? "bg-slate-900" : "bg-yellow-600 "
        } `}
        onClick={changeMode}
      />
    </div>
  );
}
