import axios from 'axios';
import React, { useEffect } from 'react'

const Cookie = () => {
    const res=async()=>{
        const data=await axios.get('http://localhost:5000/g')
        console.log(data,'g');
    }
    useEffect(() => {
  res()
    }, [])
    
  return (
    <div>Cookie</div>
  )
}

export default Cookie