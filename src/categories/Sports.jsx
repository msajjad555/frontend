import React from 'react'
import '../components/mainB/mainbody.css'
import { Link } from 'react-router-dom'
export default function Sports(){
  return (
    <div>
        <Link to='/women' className='alldeals'>
        <div className="row">
        <h2 className='title'>Sports</h2>
<div className="col-6">
    
    <img src='./images/pics/sport/b.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div>
<div className="col-6">
    <img src='./images/pics/sport/a.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div>
<div className="col-6">
    <img src='./images/pics/sport/c.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div>
<div className="col-6">
    <img src='./images/pics/sport/36.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div></div>
</Link>
    </div>

  )
}

