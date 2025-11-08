import React from 'react'

const FirstChild = ({count,handleIncrement}) => {
  return (
    <div>FirstChild

<h1>{count}</h1>
<button onClick={handleIncrement}>Increment</button>

    </div>
  )
}

export default FirstChild