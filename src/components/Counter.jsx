import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
    console.log(count)
    const handleIncrement=()=>{
        setCount(prev=>prev+1)
    }
     const handleDecrement=()=>{
        if(count>0){

            setCount(prev=>prev-1)
        }
    }
  return (
    <div>

        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement} >Decrement</button>

    </div>
  )
}

export default Counter