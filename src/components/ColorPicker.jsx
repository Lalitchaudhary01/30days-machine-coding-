import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("");
  const colors = ["blue", "red", "green", "yellow"];

  const handleFunction = (clr) => {
    setColor(clr);
    document.body.style.backgroundColor = clr;
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl mb-8">Color Picker</h1>

      <div className="flex flex-wrap justify-center gap-4">
        {colors.map((clr) => (
          <button
            key={clr}
            onClick={() => handleFunction(clr)}
            className="text-white px-4 py-2 rounded"
            style={{ backgroundColor: clr }}
          >
            {clr.charAt(0).toUpperCase() + clr.slice(1)}
          </button>
        ))}
      </div>

      <input
        value={color}
        type="text"
        readOnly
        className="mt-6 text-black bg-white px-4 py-2 rounded w-40 text-center"
      />
    </div>
  );
};

export default ColorPicker;
