import axios from 'axios'
import React,{useState} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { logup } from '../../Redux/Action/logup'

const Logup = () => {
const [name, setName] = useState('')
const [password, setpassword] = useState('')
const [email, setEmail] = useState('')
const [phoneNumber, setPhoneNumber] = useState('')
const [userName, setUserName] = useState('')
const [userProfile, setUserProfile] = useState('')
// const user=useSelector(state=>state.userDetails)
const dispatch=useDispatch();
// const handleProductPictures=(e)=>{
    
//   setUserProfile([

//     ...userProfile,
//     e.target.files[0],
    
//   ])
//   console.log(userProfile,'hhh');
// }

const postData=()=>{
 const formData=new FormData();
  formData.append('name',name);
  formData.append('password',password);
  formData.append('email',email);
  formData.append('phoneNumber',phoneNumber);
  formData.append('username',userName);
  formData.append('userProfile',userProfile);

dispatch(logup(formData))
// axios.post('http://localhost:5000/user/create',formData)
}
  return (
   <>
   <input type='text' placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
   
   <input type='text' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/><br/>
   
   <input type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
   
   <input type='number' placeholder='phone number' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/><br/>
   
   <input type='text' placeholder='username' value={userName} onChange={(e)=>setUserName(e.target.value)}/><br/>
   <input type='file' name='userProfile' onChange={(e)=>setUserProfile(e.target.files[0])}/><br/>
   <button className='btn-btn-primary' type='submit' onClick={postData}>postData</button>
   
   
   </>
  )
}

export default Logup