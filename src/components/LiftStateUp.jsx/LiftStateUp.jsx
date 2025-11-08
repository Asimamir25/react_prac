import React, { useState } from 'react'
import FirstChild from '../FirstChild'
import { SecondChild } from '../SecondChild'

const LiftStateUp = () => {
    const[stateCount,setStateCount]=useState(0)
    const handleIncrement=()=>{
        setStateCount(prev=>prev+1)
    }
  return (
    <div>

<FirstChild count={stateCount} handleIncrement={handleIncrement}/>
<SecondChild count={stateCount} handleIncrement={handleIncrement}/>

    </div>
  )
}

export default LiftStateUp