import React from "react";

const Props = (props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Props Example</h1>
      <p className="text-lg mb-2">
        Name: <span className="font-semibold">{props.name}</span>
      </p>
      <p className="text-lg mb-2">
        Age: <span className="font-semibold">{props.age}</span>
      </p>
      <p className="text-lg mb-2">
        Location: <span className="font-semibold">{props.location}</span>
      </p>
      <p className="text-lg mb-2">
        Occupation: <span className="font-semibold">{props.occupation}</span>
      </p>
    </div>
  );
};

export default Props;
