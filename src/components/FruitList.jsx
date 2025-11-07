import React from "react";

const FruitList = () => {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];
  return (
    <div>
      <h1>FruitList</h1>
      {fruits.map((item,index)=>{
        return (
          <ul key={index}>
            <li>{fruits}</li>
          </ul>
        )
      })}
    </div>
  );
};

export default FruitList;
