import React from 'react'
import './button.css'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
   <>
   <div className='btn m-2 login'><Link to='/login'>login</Link></div>



   <div className='btn logout m-2 login'><Link to='/signup'>Signup</Link></div>

   
   
   
   </>
  )
}

export default Login