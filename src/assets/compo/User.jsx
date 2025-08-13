import React from "react";
import Props from "./Props";

const User = () => {
  return (
    <div>
      <Props
        name="John Doe"
        age={30}
        location="New York"
        occupation="Engineer"
      />
    </div>
  );
};

export default User;
