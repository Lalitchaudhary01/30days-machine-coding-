import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [stepSize, setStepSize] = useState(1);
  const [manualCount, setManualCount] = useState("");

  const handleStepChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setStepSize(value);
    } else {
      setStepSize(1);
    }
  };

  const increment = () => {
    setCount(count + stepSize);
  };

  const decrement = () => {
    setCount(count - stepSize);
  };

  const reset = () => {
    setCount(0);
  };

  const handleManualChange = (e) => {
    setManualCount(e.target.value);
  };

  const handleManualKeyDown = (e) => {
    if (e.key === "Enter") {
      const value = parseInt(manualCount);
      if (!isNaN(value)) {
        setCount(value);
        setManualCount("");
      }
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl text-white mb-10">Counter App</h1>

      <div className="flex gap-4 items-center mb-6">
        <label className="text-white">Step Size:</label>
        <input
          type="number"
          value={stepSize}
          onChange={handleStepChange}
          className="w-20 p-2 rounded text-black"
        />
      </div>

      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={decrement}
          className="w-16 h-16 bg-amber-300 text-2xl text-gray-900 font-bold rounded-full"
        >
          -
        </button>
        <p className="text-4xl text-white">{count}</p>
        <button
          onClick={increment}
          className="w-16 h-16 bg-amber-300 text-2xl text-gray-900 font-bold rounded-full"
        >
          +
        </button>
      </div>

      <button
        onClick={reset}
        className="w-28 h-12 bg-amber-300 text-2xl text-gray-900 font-bold rounded-full mb-6"
      >
        Reset
      </button>

      <input
        type="number"
        placeholder="Set count manually"
        value={manualCount}
        onChange={handleManualChange}
        onKeyDown={handleManualKeyDown}
        className="p-2 rounded text-black"
      />
      <p className="text-white text-sm mt-2">(Press Enter to set count)</p>
    </div>
  );
};

export default Counter;
