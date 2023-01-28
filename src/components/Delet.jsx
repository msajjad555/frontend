import React from 'react'

const Delet = () => {
  return (
    <div>
         <div className='container-fluid '>
            <div className='row'>
                <div className='col-lg-3 text-center 'style={{background:''}}>
                <div className="card text-black text-center  "  >
                  <h5 style={{ marginLeft:'20px'}}>Dresses</h5>
  <img src="/img1/bg/dr.jpg" className='img-fluid p-3 'style={{height:'200px'}}   alt="..."/>
  <div className='row'>
    <div className='col-lg-6'>
      <button className='btn btn-warning text-center my-2 ' style={{fontSize:'13px',fontWeight:'bold',width:'140px'}}>Update</button></div>
    <div className='col-lg-6'>
    <button className='btn btn-danger text-black text-center my-2' style={{fontSize:'13px',fontWeight:'bold',width:'140px'}}>Delete</button>
    </div>
  </div>
  
  
</div>
</div>
    </div>
    </div>
    </div>
  )
}

export default Delet