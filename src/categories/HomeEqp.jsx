import React from 'react'
import '../components/mainB/mainbody.css'
import { Link } from 'react-router-dom'
export default function HomeEqp(){
  return (
    <div>
        <Link to='/women' className='alldeals'>
        <div className="row">
        <h2 className='title'>Home Equip</h2>
<div className="col-6">
    
    <img src='./images/pics/home/download6.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div>
<div className="col-6">
    <img src='./images/pics/home/a.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div>
<div className="col-6">
    <img src='./images/pics/home/download4.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div>
<div className="col-6">
    <img src='./images/pics/home/download5.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div></div>
</Link>
    </div>

  )
}

