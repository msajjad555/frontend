import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { login } from '../../Redux/Action/login'
import { signin } from '../../Redux/Action/signin'
const Login = () => {
  const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
  const dispatch=useDispatch()
  const {user,isAuthenticated}=useSelector(state=>state.userDetails);
  console.log(user,'login');
const navigate=useNavigate()
    
 const loginUser=async(e)=>{
e.preventDefault();
// const {data}=await axios.post('http://localhost:5000/signin',{
//   email,password
// })
// // const data1=data.json();
// console.log(data.user);
// if(data){
//   navigate('/account')
// }

// console.log(data,11);
// const user={email,password}

dispatch(login(email,password))
localStorage.getItem('token')

 }



 if(isAuthenticated){
  navigate('/account')

 }
 useEffect(() => {

 }, [])




 
    return (
    <>


    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
    
    <button className='btn btn-smart'onClick={loginUser}>login</button>
    <Outlet/>
    </>
  )
}

export default Login