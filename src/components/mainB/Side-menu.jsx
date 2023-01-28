import React from 'react'
import { Link } from 'react-router-dom'
import './mainbody.css'
const Sidemenu = () => {
  return (
   <>
   <div className="col-3">
    <h3 className='text-danger'>We Offer</h3>
<Link to='/alldeals' className='alldeals'>All deals</Link><br/>
<Link to='/alldeals' className='alldeals'>upcomming</Link><br/>
<Link to='/alldeals' className='alldeals'>Available</Link><br/>

<Link to='/alldeals' className='alldeals'>WatchList</Link><br/>

<h3 className='mt-3 mb-3'>Prime Progrmam</h3>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    Prime
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label" for="flexCheckChecked">
 Modern
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
  <label className="form-check-label" for="flexCheckChecked">
 Modest
  </label>
</div>

<h3 className='mt-3 mb-3'>Filter by Price</h3>
<Link to='/alldeals' className='price'>Rs.1000 TO 2000</Link><br/>
<Link to='/alldeals' className='price'>Rs.2001 TO 4000</Link><br/>
<Link to='/alldeals' className='price'>Rs.4000 AND ABOVE</Link><br/>
<h3 className='mt-3 mb-3'>Filter by reviews</h3>
<Link to='/alldeals' className='price'>1 to 2</Link><br/>
<Link to='/alldeals' className='price'>2 to 4</Link><br/>
<Link to='/alldeals' className='price'>4 to 5</Link><br/>



</div>
   
   </>
  )
}

export default Sidemenu