import React, { useContext, useEffect } from "react";
import { CounterContext } from "./CounterContext";
import { ThemeContext } from "./ThemeContext";
const ContextCounterExample = () => {
  const { count, handleIncrement, handleDecrement } =
    useContext(CounterContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (count > 5 && theme == true) {
      toggleTheme();
    } else if (count < 5 && theme == true) {
      toggleTheme();
    }
  }, [count]);
  return (
    <div
      style={
        theme
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "white", color: "black" }
      }
    >
      ContextCounterExample{count}
    </div>
  );
};

export default ContextCounterExample;
