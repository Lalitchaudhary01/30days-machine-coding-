import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setCount(event.target.value);
    }
  };
  return (
    <div className=" bg-gray-900 min-h-screen  justify-center">
      <h1 className="text-6xl  flex items-center h-min-screen pt-20 justify-center border-r-4 border-gray-500 text-white">
        Counter App
      </h1>
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={increment}
          className="w-16 h-16 bg-amber-300 text-2xl text-gray-900 font-bold rounded-full"
        >
          +
        </button>
        <button
          onClick={reset}
          className="w-28 h-12 bg-amber-300 text-2xl text-gray-900 font-bold rounded-full mx-4"
        >
          Reset
        </button>
        <button
          onClick={decrement}
          className="w-16 h-16 bg-amber-300 text-2xl text-gray-900 font-bold rounded-full"
        >
          -
        </button>
      </div>
      <div className="flex justify-center items-center mt-10">
        <p onKeyDown={handleKeyDown} id="count" className="text-4xl text-white">
          {count}
        </p>
      </div>
    </div>
  );
};

export default Counter;
