
import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom';



// console.log(data);

const Banner = () => {
const data=[
  '/img1/bg/bty.jpg',
  '/img1/bg/sofa.jpg',
  '/img1/bg/epe.jpg',
  '/img1/bg/get.jpg',
  '/img1/bg/shop.jpg',
  '/img1/bg/shops.jpg',
  '/img1/bg/45.jpg'


]
    
    
    return (
        <>

            <Carousel
                className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 100,
                        border:10,
                        borderColor:'#494949',
                        marginTop: -22,
                        height: "104px",
                    }
                }}>
                {
                   data.map((imag, i) => {
                        return (
                            <>
                         <Link to='/'><img className="card-img-top img-fluid banner-img" src={imag} style={{height:'300px'}} alt="Card image cap"/></Link>
                            </>
                        )
                    })
                }

            </Carousel>
        </>
    )
}  

export default Banner;
