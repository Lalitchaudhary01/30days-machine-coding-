import React, { useState } from "react";

const Greeting = () => {
  const [user, setUser] = useState("");
  const handleInputChange = (event) => {
    setUser(event.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <input
        onChange={handleInputChange}
        type="text"
        className="border-2 border-gray-300 p-2 rounded-md"
        placeholder="Type your greeting here..."
      />
      <p className="mt-4 text-lg">
        Hello, <button className="font-bold">{user}</button>! Welcome to our
        application.
      </p>
    </div>
  );
};

export default Greeting;
