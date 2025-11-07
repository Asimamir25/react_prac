import React, { useState } from 'react'

const NameInput = () => {
    const [name,setName]=useState('')
  return (
    <div>NameInput


        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <h1>{name}</h1>
    </div>
  )
}

export default NameInput