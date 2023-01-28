import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockPersonIcon from '@mui/icons-material/LockPerson';

const data = () => {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <img style={{width:'350px'}} src="./img1/bg/bona.jpg" alt="" />
                </div>
                <div className='col-lg-5'style={{marginLeft:''}}>
                    <h5>LDer Zeit Cat Scratch Column Cat Toy Chicken Cat Scratch Column Suitable for Kittens Indoor Sisal Hemp Material Claw Grinding Play Wear Resistant Scratch Resistant Furniture Protection Pet Supplies</h5>
                    <p>Brand: LDer Zeit</p>
                    <hr />
                    <h3>$83.53</h3>
                    <p>★ [High quality material] - Durable sisal hemp. Cats naturally like to scratch and are not easy to chip off. The column is covered with sisal hemp, which can protect it from damage. At the same time, the cat can develop a good habit of scratching.</p>
                    <p style={{marginTop:'-20px'}}>★ [Interesting shape] - It is vivid and unique. This cute chicken shaped cat scratch column can let the cat scratch, crawl, exercise and jump. Unlike other traditional cat scratch boards, our products are more vivid and durable, suitable for all kinds of cats.</p>
                    <p style={{marginTop:'-20px'}}>★ [Product size] - 25*30cm/9.84*11.81in; Manual measurement may cause 1-2cm error.</p>
                    <p style={{marginTop:'-20px'}}>★ [Make your cat happy] - When you leave, they will not feel lonely. Let them play and relax comfortably, away from your home.</p>
                </div>
                <div className='col-lg-3'style={{border:'2px solid black'}}>
                    <h5>$83.53</h5>
                    <p>FREE delivery December 21 - January 4. Details</p>
                    <p><LocationOnIcon/> Deliver to Pakistan</p>
                    <h3>In Stock.</h3>
                    <div className='text-center'style={{width:'250px'}}>
                    <button className='btn btn-warning text-center my-3'>Add to Cart</button>
                    </div>
                    <div style={{textAlign:'center',width:'250px'}}>
                    <button className='btn btn-warning  'style={{background:'orange'}}>Buy Now</button>
                    </div>
                    <p className='my-3'><LockPersonIcon/> Secure transaction</p>
                    <p>Ships from</p>
                    <p style={{marginLeft:'150px',marginTop:'-40px'}}> WZ-mi</p>
                    <p>Sold by</p>
                    <p style={{marginLeft:'150px',marginTop:'-40px'}}> WZ-mi</p>
                    <p>Return policy: Returnable until Jan 31, 2023 </p>
                    <button className='btn text-start'style={{background:'#EBEDF0',width:'200px',border:'1px solid black'}}>Add to List</button>
                    
                </div>
            </div>
        </div>




    </div>
  )
}

export default data