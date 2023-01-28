import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';

const UserProfile = () => {
    const [User, setUser] = useState('')
    const {user,isAuthenticated}=useSelector(state=>state.userDetails);
    console.log(user,'profile');
    // const user=async(e)=>{
    //     e.preventDefault();
//         const data=await axios.get('http://localhost:5000/me');
//         console.log(data,'me')
//         setUser(data);}
//         useEffect(() => {
// user()
//         }, [])
    // }
  return (
    <>
{user.name}<br/>
<img src={`http://localhost:5000/uploads/${user.userProfile}`}/>
    <h1>hello</h1></>
  )
}

export default UserProfile