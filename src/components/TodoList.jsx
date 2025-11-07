import React, { useState } from "react";

const TodoList = () => {
  const [item, setItem] = useState("");
  const [task, setTask] = useState([]);

  console.log(task);
  const total=task.length
  const handleSubmit = () => {
    setTask([...task, { name: item, status: false }]);
  };
  const handleDelete = (test) => {
    console.log(test);
    setTask(task.filter((item, index) => item.name !== test));
   
  };
  const handleToggle=(arg)=>{

 setTask(task.map((item,index)=>item.name==arg?{...item,status:!item.status}:item))

  }
  return (
    <div>
      <h1>TodoList</h1>
      <h1>{total}</h1>
      <h1>Complete{task.filter((item)=>item.status).length}</h1>


      <input
        type="text"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
      {task.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <button onClick={()=>{
                handleToggle(item.name)
            }}>Toggle</button>
            <button
              onClick={() => {
                handleDelete(item.name);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
