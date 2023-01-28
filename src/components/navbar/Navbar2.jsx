import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import "./navbar.css";
const Navbar2 = () => {

  return (
    <>
<div className="new_nav d-flex flex-row justify-content-arround" style={{background:'#232F3E'}}>
            <div className="nav_data">
          
<NavLink to='/product'style={{textDecoration:'none',marginLeft:'10px'}}> <p><i className="fas fa-shopping-cart"></i>Picture</p></NavLink>
<NavLink to='/category'style={{textDecoration:'none'}}> <p><i className="fas fa-shopping-cart"></i>Category</p></NavLink>
<NavLink to='/register'style={{textDecoration:'none'}}> <p><i className="fas fa-shopping-cart"></i>User</p></NavLink>
<NavLink to='/login'style={{textDecoration:'none'}}> <p><i className="fas fa-shopping-cart"></i>login</p></NavLink>
                  
</div></div>
    
    </>
  )
}

export default Navbar2