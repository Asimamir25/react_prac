import React, { useEffect, useState } from 'react'

const DateTime = () => {
  const [date,setDate]=useState("")
 

  useEffect(()=>{
    const interval=setInterval(()=>{

      const datemew=new Date()
        datemew.setDate(datemew.getDate() + 17)
      const formatDate=`${datemew.getFullYear()}-${String(datemew.getMonth()+1)}-${datemew.getDate()}-${String(datemew.getHours()).padStart(2,'0')}: ${String(datemew.getMinutes()).padStart(2,'0')} ${String(datemew.getSeconds()).padStart(2,'0')}`
      setDate(formatDate)
    },1000)
    return()=>clearInterval(interval)
  },[])
  return (
    <div>DateTime {date}</div>
  )
}

export default DateTime