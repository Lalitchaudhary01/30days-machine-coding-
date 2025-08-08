import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState("");
  const [todolist, setTodoList] = useState([]);

  const onChange = () => {
    setText(event.target.value);
  };

  const onClick = () => {
    if (text.trim() === "") {
      return;
    } else {
      setTodoList([...todolist, text]);
      setText("");
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col  justify-center text-white">
      {" "}
      <h1 className="text-7xl flex justify-center h-20">Todo list</h1>
      <div className="items-center justify-center ml-130">
        <label className="flex">Input</label>
        <input
          type="text"
          value={text}
          onChange={onChange}
          className="bg-white text-black"
        />
        <button
          onClick={onClick}
          className="bg-blue-500 hover:bg-blue-600 rounded m-4 w-15 text-white"
        >
          Add
        </button>
        <ul>
          {todolist.map((item, index) => {
            return (
              <li key={index} className="text-xl">
                {item}
                <button
                  onClick={() =>
                    setTodoList(todolist.filter((_, i) => i !== index))
                  }
                  className="bg-red-500 hover:bg-red-600 rounded m-4 w-15 text-white"
                >
                  {" "}
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
