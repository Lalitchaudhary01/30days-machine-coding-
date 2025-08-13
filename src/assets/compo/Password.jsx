import React, { useState } from "react";

const Password = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [text, setText] = useState("");
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-white">Password Show/Hide</h1>
      {/* <input value={text} className="text-white" /> */}
      <input
        value={text}
        onChange={handleChange}
        type={passwordVisible ? "text" : "password"}
        className="text-black h-10 w-60 bg-white rounded-md p-2 m-2"
      />
      <button
        onClick={togglePasswordVisibility}
        className="bg-blue-500 text-white rounded-md p-2 m-2"
      >
        {passwordVisible ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
};

export default Password;
