import React, { useState } from "react";

const CounterLetter = () => {
  const [count, setCount] = useState(0);

  const counting = (event) => {
    setCount(event.target.value.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">How many letter i write in input</h1>
      <input
        onChange={counting}
        type="text"
        className="border-2 border-gray-300 p-2 rounded-md"
        placeholder="Type here..."
      />
      <p className="mt-4 text-lg">
        Number of letters: <span className="font-bold">{count}</span>
      </p>
      <p className="mt-2 text-sm text-gray-500">Press Enter to submit</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
        Submit
      </button>
    </div>
  );
};

export default CounterLetter;
