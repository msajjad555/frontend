import React from 'react'
import * as Icon from 'react-bootstrap-icons'
import './Footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
 <>
 <div className='footer-1'>
<div className="container">
    <div className="row">
        <div className="col-lg-4">
        <div className="first">
<h3 className='title-1'>GET IN TOUCH</h3>
<div className='hr-1'></div>
 <div className='silver'> 
<Icon.PhoneFlip color='red' size='35px'/>&nbsp;&nbsp;&nbsp;&nbsp;+9712345678999&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div className='mt-3'><h6><Icon.PhoneFill color='red' size='35px' />&nbsp; &nbsp;&nbsp;&nbsp; email@email.com</h6></div>
        </div></div></div>
        <div className="col-lg-4">
        <div className="first">
<h3 className='title-1'>FIRE SAFTY SERVICES</h3>
<div className='hr-1'></div>

        </div>         
<ul className='silver'>
<li>Fire Alarm & Emergency Lighting System</li>
<li>Fire Fighting System</li>
<li>Fire Suppression System</li>
<li>Fire Suppression Hydrostatic Test & Refilling</li>
<li>Room Integrity Test</li>
<li>Fire Rated Steel, Wooden Door & Cabinet</li>
<li>Fire & Safety Training & Consultancy</li>
<li>Marine Fire & Safety</li>
<li>Security Systems</li></ul>
        </div>
        <div className="col-lg-4">
        <div className="first">
<h3 className='title-1'>LICENSE AND CERTIFICATES</h3>
<div className='hr-1'></div>

        </div> 
        
        <ul className='silver'>       
<li>Commercial License</li>
<li>VAT Certificate</li>
<li>Safety Certificate</li>
<li>DCD Certificate</li>
<li>SIRA Certificate</li>
<li>ISO Certificate</li>
</ul>

        </div>
        <div className='zz'>
        <hr></hr>
        </div>
        <div className="col-6">
        <div className='silver'>
        <h6>Copyright 2021 - Emerging Horizons Technical Services LLC</h6>
<h6>Designed by: Glare Technologies</h6>
</div>
</div>
<div className="col-6">
        <div className='mm'>
<Icon.Facebook color='white' size='50px' className='camera m-2'/>
<Icon.Twitter color='white' size='50px' className='camera m-2'/>
<Icon.Linkedin color='white' size='50px' className='camera m-2'/>
<Icon.Google color='white' size='50px' className='camera m-2'/>

<a href='#top-menu'><button className='btn btn-primary ml-3'><Icon.ArrowBarUp/></button></a>

</div>

</div>


</div>








</div>



 </div>
 </>
  )
}

export default Footer