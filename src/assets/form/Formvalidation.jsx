import React, { useState } from "react";

const Formvalidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErros = {};
    if (!email) {
      newErros.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErros.email = "Email is invalid";
    }
    if (!password) {
      newErros.password = "Password is required";
    } else if (password.length < 6) {
      newErros.password = "Password must be at least 6 characters long";
    }
    setErrors(newErros);
    return Object.keys(newErros).length === 0;
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl text-white mb-10">Form Validation Example</h1>
      <form className="bg-white p-8 rounded shadow-md w-96">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            if (validateForm()) {
              alert("Form submitted successfully!");
            }
          }}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setEmail("");
            setPassword("");
          }}
          type="reset"
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default Formvalidation;
