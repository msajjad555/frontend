import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import "./banner.css";
import { Link } from 'react-router-dom';



// console.log(data);

const Banner = () => {
    const [Banner, setBanner] = useState([])
    const banner=async()=>{
        const {data}=await axios.get('http://localhost:5000/banner')
        setBanner(data.banner)
    }
    useEffect(() => {
    banner()
    }, [])
    
    return (
        <>

            <Carousel
                className="carasousel"
                autoPlay={true}
                animation="fade"
                indicators={true}
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
                    Banner.map((imag, i) => {
                        return (
                            <>
                         <Link to='/'><img className="card-img-top img-fluid banner-img" src={`http://localhost:4000/uploads/${imag.file}`} alt="Card image cap"/></Link>
                            </>
                        )
                    })
                }

            </Carousel>
        </>
    )
}  

export default Banner;
