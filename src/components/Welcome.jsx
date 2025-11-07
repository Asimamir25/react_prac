import React from "react";

const Welcome = ({name,goal}) => {
  return (
    <div>
      <h1>Hello, I’m {name}!</h1>
      <p>My goal is to {goal}</p>
    </div>
  );
};

export default Welcome;
