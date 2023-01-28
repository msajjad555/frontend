import React from 'react'
import '../components/mainB/mainbody.css'
import { Link } from 'react-router-dom'
export default function Industry(){
  return (
    <div>
        <Link to='/women' className='alldeals'>
        <div className="row">
        <h2 className='title'>Industry</h2>
<div className="col-6">
    
    <img src='./images/pics/industry/download1.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div>
<div className="col-6">
    <img src='./images/pics/industry/download2.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div>
<div className="col-6">
    <img src='./images/pics/industry/download3.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div>
<div className="col-6">
    <img src='./images/pics/industry/images.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div></div>
</Link>
    </div>

  )
}

