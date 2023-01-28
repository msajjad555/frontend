import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = () => {
  return (
    <div>
        {/* =========cntanier 1======= */}
          <div className='container-fluid  'style={{marginTop:'40px'}}>
            <div className='row'>
                <div className='col-lg-3 'style={{background:''}}>
                <div className="card text-black text-start  "  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>Dresses</h5>
  <img src="/img1/bg/dr.jpg" className='img-fluid py-3'style={{height:'345px'}}   alt="..."/>
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-10px'}}><Link to='/electronics'>shop now</Link></button>
</div>
</div>

{/* =======card 2========== */}

<div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start  "  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>Get fit at home</h5>
  <img src="/img1/bg/fet.jpg" className='img-fluid py-3'style={{height:'345px'}}   alt="..."/>
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-10px'}}>Explore now</button>
</div>
</div>

{/* =======card 3======= */}

<div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start  "  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>Health & Personal Care</h5>
  <img src="/img1/bg/hel.jpg" className='img-fluid py-3'style={{height:'345px'}}   alt="..."/>
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-10px'}}>Shop now</button>
</div>
</div>

{/* ==========card 4======== */}

<div className='col-lg-3 'style={{background:''}}>
<div className="card  bg-light text-black text-center  "  >
 <h4 style={{marginTop:'10px',marginBottom:'15px'}}>Sign in for the best experience</h4>
<button style={{width:'200px',marginLeft:'50px'}} className='btn btn-warning text-center'>Sign in securely</button>
</div>
    <div className="card  text-black text-start my-4 " style={{fontStyle:'italic',height:''}} >
    <img src="/img1/bg/pro.jpg" className='img-fluid 'style={{height:'275px'}}   alt="..."/>
 
</div>
</div>

</div>   
            </div>
        


{/* ===============cntainer 2======== */}

<div className='container-fluid my-1 'style={{marginTop:'-50px'}}>
            <div className='row '>
                <div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start"  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>Shop by Category</h5>
                  <div className="container my-5">
                    <div className="row">

                  
<div className="col-lg-6">
    <img src="./img1/bg/comp.jpg" alt="" />
    <h6>Computer & Accessories</h6>
</div>
<div className="col-lg-6">
<img src="./img1/bg/gam.jpg" alt="" />
<h6>Video Game</h6>
    
</div>
<div className="col-lg-6">
<img src="./img1/bg/baby.jpg" alt="" />
<h6>Baby</h6>
</div>
<div className="col-lg-6">
<img src="./img1/bg/toy.jpg" alt="" />
<h6>Toys & Games</h6>
</div>
</div>
                  </div>
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-1px'}}>Shop now</button>
</div>
</div>

{/* =======card 2========== */}

<div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start  "  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>Gaming accessories</h5>
                  <div className="container my-5">
                    <div className="row">

                  
<div className="col-lg-6">
    <img src="./img1/bg/head.jpg" style={{width:'140px'}} alt="" />
    <h6>Headsets</h6>
</div>
<div className="col-lg-6">
<img src="./img1/bg/key.jpg" style={{width:'140px'}} alt="" />
<h6>Keyboards</h6>
    
</div>
<div className="col-lg-6">
<img src="./img1/bg/mic.jpg"style={{width:'140px'}} alt="" />
<h6>Computer mice</h6>
</div>
<div className="col-lg-6">
<img src="./img1/bg/char.jpg"style={{width:'140px'}} alt="" />
<h6>Chairs</h6>
</div>
</div>
                  </div>
 
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'9px'}}>See more</button>
</div>
</div>

{/* =======card 3======= */}

<div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start  "  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>Toys Under $30</h5>
  <img src="/img1/bg/und.jpg" className='img-fluid py-3'style={{height:'345px'}}   alt="..."/>
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-10px'}}>Shop now</button>
</div>
</div>

{/* ==========card 4======== */}
<div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start  "  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>Small gifts under $20</h5>
  <img src="/img1/bg/gift.jpg" className='img-fluid py-3'style={{height:'345px'}}   alt="..."/>
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-10px'}}>Shop now</button>
</div>
</div>

</div>   
            </div>
        
{/* =======cntainer 3====== */}

<div className='container-fluid my-4 'style={{marginTop:'-50px'}}>
            <div className='row'>
                <div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start  "  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>Shop activity trackers and smartwatches</h5>
  <img src="/img1/bg/watch.jpg" className='img-fluid py-3'style={{height:'320px'}}   alt="..."/>
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-10px'}}>Shop now</button>
</div>
</div>

{/* =======card 2========== */}

<div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start  "  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>New arrivals in Toys</h5>
  <img src="/img1/bg/arri.jpg" className='img-fluid py-3'style={{height:'345px'}}   alt="..."/>
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-10px'}}>See more</button>
</div>
</div>

{/* =======card 3======= */}

<div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start  "  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>For your Fitness Needs</h5>
  <img src="/img1/bg/for.jpg" className='img-fluid py-3'style={{height:'345px'}}   alt="..."/>
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-10px'}}>Shop now</button>
</div>
</div>

{/* ==========card 4======== */}
<div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start  "  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>Home & Kitchen Under $30</h5>
  <img src="/img1/bg/hom.jpg" className='img-fluid py-3'style={{height:'345px'}}   alt="..."/>
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-10px'}}>Shop now</button>
</div>
</div>

</div>   
            </div>

            {/* ======cntainer 4====== */}
            <div className='container-fluid my-4 'style={{marginTop:'-50px'}}>
            <div className='row'>
                <div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start  "  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>Gifts for every stocking</h5>
                  <div className="container my-5">
                    <div className="row">

                  
<div className="col-lg-6">
    <img src="./img1/bg/g.jpg" style={{width:'140px',height:'100px'}} alt="" />
    <h6>Shop All</h6>
</div>
<div className="col-lg-6">
<img src="./img1/bg/h.jpg" style={{width:'140px',height:'100px'}} alt="" />
<h6>Under $10</h6>
    
</div>
<div className="col-lg-6">
<img src="./img1/bg/j.jpg"style={{width:'140px',height:'100px'}} alt="" />
<h6>Under $20</h6>
</div>
<div className="col-lg-6">
<img src="./img1/bg/k.jpg"style={{width:'140px',height:'100px'}} alt="" />
<h6>Under $30</h6>
</div>
</div>
                  </div>
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-15px'}}>Shop now</button>
</div>
</div>

{/* =======card 2========== */}

<div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start  "  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>Kindle E readers</h5>
  <img src="/img1/bg/nod.jpg" className='img-fluid py-3'style={{height:'345px'}}   alt="..."/>
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-10px'}}>See more</button>
</div>
</div>

{/* =======card 3======= */}

<div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start  "  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>Shop Laptops & Tablets</h5>
  <img src="/img1/bg/tabl.jpg" className='img-fluid py-3'style={{height:'345px'}}   alt="..."/>
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-10px'}}>Shop now</button>
</div>
</div>

{/* ==========card 4======== */}
<div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start  "  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>Create with strip lights</h5>
  <img src="/img1/bg/lit.jpg" className='img-fluid py-3'style={{height:'345px'}}   alt="..."/>
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-10px'}}>Shop now</button>
</div>
</div>

</div>   
            </div>

            {/* ======cntainer 5===== */}
            <div className='container-fluid my-4 'style={{marginTop:'-50px'}}>
            <div className='row'>
                <div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start  "  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>Gaming merchandise</h5>
                  <div className="container my-5">
                    <div className="row">

                  
<div className="col-lg-6">
    <img src="./img1/bg/q.jpg" style={{width:'140px',height:'100px'}} alt="" />
    <h6>Apparel</h6>
</div>
<div className="col-lg-6">
<img src="./img1/bg/w.jpg" style={{width:'140px',height:'100px'}} alt="" />
<h6>Hats</h6>
    
</div>
<div className="col-lg-6">
<img src="./img1/bg/e.jpg"style={{width:'140px',height:'100px'}} alt="" />
<h6>Action Figures</h6>
</div>
<div className="col-lg-6">
<img src="./img1/bg/r.jpg"style={{width:'140px',height:'100px'}} alt="" />
<h6>Mugs</h6>
</div>
</div>
                  </div>
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-12px'}}>Shop now</button>
</div>
</div>

{/* =======card 2========== */}

<div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start  "  >
                 <h5 style={{marginTop:'20px', marginLeft:'20px'}}> Shop Pet supplies</h5>
  <img src="/img1/bg/pet.jpg" className='img-fluid py-3'style={{height:'345px'}}   alt="..."/>
  <Link to='/home'><button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-10px'}}>See more</button></Link>
</div>
</div>

{/* =======card 3======= */}

<div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start  "  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>Deals in Tools and Home Improvement</h5>
  <img src="/img1/bg/tool.jpg" className='img-fluid py-3'style={{height:'320px'}}   alt="..."/>
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-10px'}}>Shop now</button>
</div>
</div>

{/* ==========card 4======== */}
<div className='col-lg-3 'style={{background:''}}>
                <div className="card  text-black text-start  "  >
                  <h5 style={{marginTop:'20px', marginLeft:'20px'}}>A holiday home starts here</h5>
                  <div className="container my-5">
                    <div className="row">

                  
<div className="col-lg-6 col-md-12">
    <img src="./img1/bg/a.jpg"style={{width:'140px',height:'100px'}}  alt="" />
    <h6>Decor</h6>
</div>
<div className="col-lg-6 col-md-12">
<img src="./img1/bg/s.jpg"style={{width:'140px',height:'100px'}}  alt="" />
<h6>Kitchen</h6>
    
</div>
<div className="col-lg-6 col-md-12">
<img src="./img1/bg/d.jpg"style={{width:'140px',height:'100px'}} alt="" />
<h6>Entertaining</h6>
</div>
<div className="col-lg-6 col-md-12">
<img src="./img1/bg/f.jpg" style={{width:'140px',height:'100px'}}alt="" />
<h6>Bedding & bath</h6>
</div>
</div>
                  </div>
  <button className='btn text-primary text-start' style={{fontSize:'13px',fontWeight:'bold',marginTop:'-15px'}}>Shop now</button>
</div>
</div>

</div>   
            </div>

     <hr className='my-5 mt-10'/> 
     <div className='text-center'> 
     <h6>See personalized recommendations</h6> 
     <button style={{width:'250px'}} className='btn btn-warning'>sign in</button> 
     <h6>New customer? Start here.</h6>  
     </div> 
     <hr style={{marginTop:'45px'}}/>
</div>





   
  )
}

export default Card