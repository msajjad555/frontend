import Search from '@material-ui/icons/Search'
import LocationOn from '@material-ui/icons/LocationOn'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector,useDispatch } from 'react-redux';
import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import Badge  from '@mui/material/Badge';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Header = () => {
        const [filter, setFilter] = useState('')
       const getData=useSelector(state=>state.cartReducer.carts)
       console.log(getData,'getdata');
  return (
    <>
    <div className="header">
<div className="container-fluid bg-success">
    <div className="row">
        <div className="col-lg-1">
            <img className='logo' src='/images/logo1.png' alt=''/>
        </div>
        <div className="col-lg-2">

<span style={{color:'#C0C6A6'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Deliver to</span><br />
<LocationOn style={{color:'white'}}/>
<span>&nbsp;&nbsp;<b>Pakistan</b></span>

        </div>
        <div className="col-lg-1">
            
{/* <input type="search" className='mt-2 searchbox border rounded'/> */}
{/* <input type='search' value={filter} onChange={(e)=>setFilter(e.target.value)}/> */}

<button className='btn btn-warning search_button'><Search/></button>
<select className="all border rounded bg-secondary text-light w-25">



       
        <option selected="selected">All</option>
        <option value="search-alias=arts-crafts-intl-ship">Arts &amp; Crafts</option>
        <option value="search-alias=automotive-intl-ship">Automotive</option>
        <option value="search-alias=baby-products-intl-ship">Baby</option>
        <option value="search-alias=beauty-intl-ship">Beauty &amp; Personal Care</option>
        <option value="search-alias=stripbooks-intl-ship">Books</option>
        <option value="search-alias=fashion-boys-intl-ship">Boys' Fashion</option>
        <option value="search-alias=computers-intl-ship">Computers</option>
        <option value="search-alias=deals-intl-ship">Deals</option>
        <option value="search-alias=digital-music">Digital Music</option>
        <option value="search-alias=electronics-intl-ship">Electronics</option>
        <option value="search-alias=fashion-girls-intl-ship">Girls' Fashion</option>
        <option value="search-alias=hpc-intl-ship">Health &amp; Household</option>
        <option value="search-alias=kitchen-intl-ship">Home &amp; Kitchen</option>
        <option value="search-alias=industrial-intl-ship">Industrial &amp; Scientific</option>
        <option value="search-alias=digital-text">Kindle Store</option>
        <option value="search-alias=luggage-intl-ship">Luggage</option>
        <option value="search-alias=fashion-mens-intl-ship">Men's Fashion</option>
        <option value="search-alias=movies-tv-intl-ship">Movies &amp; TV</option>
        <option value="search-alias=music-intl-ship">Music, CDs &amp; Vinyl</option>
        <option value="search-alias=pets-intl-ship">Pet Supplies</option>
        <option value="search-alias=instant-video">Prime Video</option>
        <option value="search-alias=software-intl-ship">Software</option>
        <option value="search-alias=sporting-intl-ship">Sports &amp; Outdoors</option>
        <option value="search-alias=tools-intl-ship">Tools &amp; Home Improvement</option>
        <option value="search-alias=toys-and-games-intl-ship">Toys &amp; Games</option>
        <option value="search-alias=videogames-intl-ship">Video Games</option>
        <option value="search-alias=fashion-womens-intl-ship">Women's Fashion</option>
    
</select>




        </div>
        <div className="col-lg-2">
        <span style={{color:'#C0C6A6'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hello,<Link to='/login' target='_blank'>Sign In</Link></span><br />
{/* <LocationOn style={{color:'white'}}/> */}
<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Profile</b></span>

        </div>
        <div className="col-lg-1"></div>
    
        <div className="col-lg-4">
        <Badge className='cart' color='primary' badgeContent={getData.length}>
            <AddShoppingCartIcon/>{
                getData.length?
                <div className='bg-danger'><table>
                        <thead>
                                <tr>
                                        <th>photo</th>
                                        <th>name</th>
                                </tr>
                        </thead>
                        <tbody>
                                {
                                        getData.map((e)=>{
                                                return(
                                                        <>
                                                        <tr>
                                                                <td>
                                                                        <img src={`http://localhost:5000/uploads/${e.productPictures[0].img}`} style={{height:100,width:100}}/>
                                                                </td>
                                                        </tr>
                                                        </>
                                                )
                                        })
                                }
                        </tbody>
                        </table></div>:<h1>cart is empty</h1>
        } 
                </Badge>
        </div>

        
    </div>
</div>
</div>
   </>
  )
}

export default Header