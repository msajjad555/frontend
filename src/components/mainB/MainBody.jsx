import React from 'react'
import './mainbody.css'
import {Link} from 'react-router-dom'
import Women from '../../categories/Women'
import HomeEqp from '../../categories/HomeEqp'
import Kitchen from '../../categories/Kitchen'
import Industry from '../../categories/Industry'
import Sports from '../../categories/Sports'
import Men from '../../categories/Men'
import Toys from '../../categories/Toys'
import Sidemenu from './Side-menu'
const MainBody = () => {
  return (
   <>
<div className="lg-container-fluid md-container ">
    <div className="row">

<div className="col-12 maindiv">
<div className="row justify-content-center">
<div className="col-4 div-head m-2">
<div className="row">
<Women/>

</div>

</div>
<div className="col-4 div-head m-2">
<div className="row">
<HomeEqp/>
</div>
</div>
<div className="col-4 div-head m-2">
<div className="row">
<Kitchen/>

</div>

</div>
<div className="col-4 div-head m-2">
<div className="row">
<Industry/>

</div>

</div>

<div className="col-4 div-head m-2">
<div className="row">
<Toys/>

</div>

</div>
<div className="col-4 div-head m-2">
<div className="row">
<Sports/>

</div>

</div>
<div className="col-4 div-head m-2">
<div className="row">
<Women/>

</div>

</div>
<div className="col-4 div-head m-2">
<div className="row">
<HomeEqp/>
</div>
</div>
<div className="col-4 div-head m-2">
<div className="row">
<Kitchen/>

</div>

</div>
<div className="col-4 div-head m-2">
<div className="row">
<Industry/>

</div>

</div>

<div className="col-4 div-head m-2">
<div className="row">
<Toys/>

</div>

</div>
<div className="col-4 div-head m-2">
<div className="row">
<Sports/>

</div>

</div>








</div>




    </div>
</div>




</div>

    </>
  )
}

export default MainBody