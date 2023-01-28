import React from 'react'
import '../components/mainB/mainbody.css'
import { Link } from 'react-router-dom'
export default function Kitchen(){
  return (
    <div>
        <Link to='/electronics' className='alldeals'>
        <div className="row">
        <h2 className='title'>Kitchen</h2>
<div className="col-6">
    
    <img src='./images/pics/home-imp/a.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div>
<div className="col-6">
    <img src='./images/pics/home-imp/b.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div>
<div className="col-6">
    <img src='./images/pics/home-imp/c.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div>
<div className="col-6">
    <img src='./images/pics/home-imp/images.jpg' className='h-auto w-100 m-2' alt='banner'/>
</div></div>
</Link>
    </div>

  )
}

