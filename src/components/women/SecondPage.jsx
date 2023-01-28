import React from 'react'
import Carousel from 'react-material-ui-carousel'
// import Sidemenu from './mainB/Side-menu'


const data = [
    "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
    " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
]

// console.log(data);

const Secondpage = () => {
    return (
        <>
<div className="container-fluid">
    <div className="row">
    {/* <div className="col-3"><Sidemenu/></div> */}
        <div className="col-lg-4">
        <Carousel
                className="carasousel"
                autoPlay={false}
                animation="slide"
               
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
                    data.map((imag, i) => {
                        return (
                            <>
                                <img src={imag} alt="img" key={i} className="banner_img" />
                            </>
                        )
                    })
                }

            </Carousel>


        </div>
        
        <div className="col-4">
            3
        </div>
    </div>
</div>
           
        </>
    )
}

export default Secondpage;

