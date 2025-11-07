import React, { useState,useEffect } from "react";

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  useEffect (() => {
      console.log(`Count updated t-${count}`);
    },
    [count]);
  const handleIncrement = () => {
    setCount(prev=>prev+1);
  };
  return (
    <div>
      useEffectDemo
      <button onClick={handleIncrement}>Incremnt</button>
    </div>
  );
};

export default UseEffectDemo;
