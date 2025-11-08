import React from 'react'

export const SecondChild = ({count,handleIncrement}) => {
  return (
    <div>SecondChild
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
