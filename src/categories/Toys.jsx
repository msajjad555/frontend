import React from 'react'
import '../components/mainB/mainbody.css'
import { Link } from 'react-router-dom'
export default function Toys(){
  return (
    <div>
        <Link to='/women' className='alldeals'>
        <div className="row">
        <h2 className='title'>Toys</h2>
<div className="col-6">
    
    <img src='./images/pics/toys/30.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div>
<div className="col-6">
    <img src='./images/pics/toys/b.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div>
<div className="col-6">
    <img src='./images/pics/toys/31.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div>
<div className="col-6">
    <img src='./images/pics/toys/32.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div></div>
</Link>
    </div>

  )
}

