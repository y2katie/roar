import React from "react";
import AliceCarousel from 'react-alice-carousel';
import Navbar from "./Navbar"
import CopyLeftImage from "./CopyLeftImage"
import CopyRightImage from "./CopyRightImage"

import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
};

const items = [
    <div className="item multiple" data-value="1">
      <h2 style={{color:"white"}}>
        KATIE
      </h2>
      <p style={{color:"white"}}> Here are some extra resources that may be useful to you!Here are some extra resources that may be useful to you!</p>
    </div>,
    <div className="item multiple" data-value="2">
      <h2 style={{color:"blue"}}>
        KATIE
      </h2>
      <p style={{color:"white"}}> Here are some extra resources that may be useful to you!Here are some extra resources that may be useful to you!</p>
    </div>,
    <div className="item multiple" data-value="3">
      <h2 style={{color:"red"}}>
        KATIE
      </h2>
      <p style={{color:"white"}}> Here are some extra resources that may be useful to you!Here are some extra resources that may be useful to you!</p>
    </div>,
    <div className="item multiple" data-value="4">
      <h2 style={{color:"yellow"}}>
        KATIE
      </h2>
      <p style={{color:"white"}}> Here are some extra resources that may be useful to you!Here are some extra resources that may be useful to you!</p>
    </div>,

    <div className="item multiple" data-value="5">
      <h2 style={{color:"orange"}}>
        KATIE
      </h2>
      <p style={{color:"white"}}> Here are some extra resources that may be useful to you!Here are some extra resources that may be useful to you!</p>
    </div>,
    <div className="item multiple" data-value="6">
      <h2 style={{color:"purple"}}>
        KATIE
      </h2>
      <p style={{color:"white"}}> Here are some extra resources that may be useful to you!Here are some extra resources that may be useful to you!</p>
    </div>
];


const Carousel = () => (
  <div>
    <Navbar />
    <h1 style={{color:"purple", fontSize:"70px"}}> Loved by industry leaders </h1>
    <AliceCarousel
        autoPlay
        mouseTracking
        autoPlayInterval={3000}
        items={items}
        responsive={responsive}
    />
   <CopyLeftImage
     header="Delivery Optimizations"
     followUp="Here are some extra resources that may be useful to you!Here are some extra resources that may be useful to you!"
     sellingPointImage = "https://images.pexels.com/photos/3119736/pexels-photo-3119736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    />
  <CopyRightImage
    header="Delivery Optimizations"
    followUp="Here are some extra resources that may be useful to you!Here are some extra resources that may be useful to you!"
    sellingPointImage = "https://images.pexels.com/photos/3119736/pexels-photo-3119736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
   />
   </div>
)



export default Carousel
