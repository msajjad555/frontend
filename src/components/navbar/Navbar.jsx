import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  const {user,isAuthenticated}=useSelector(state=>state.userDetails);
  return (
<>
<div className="container">

<div className="row">
<div className='text-light navbar1 '>
    <ul>
        <li>


<Link to='/'>Home</Link></li>
<li style={{textDecoration:'none'}}><Link to='products'>Products</Link></li>
<li><Link to='/product'>upload</Link></li>
<li><Link to='/productupload'>uploadnew</Link></li>
<li><Link to='/login'>login</Link></li>
<li><Link to='/account'>account</Link></li>
<li><Link to='/category'>category</Link></li>
<li><Link to='/search'>Search</Link></li>

{isAuthenticated===true?null: <li><Link to='/user/create'>register</Link></li>}
  </ul>

</div>
</div>
</div>

</>
  )
}

export default Navbar