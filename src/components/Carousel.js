import React from "react";
import AliceCarousel from 'react-alice-carousel';
import Navbar from "./Navbar"
import CopyLeftImage from "./CopyLeftImage"
import {
  Container
} from "semantic-ui-react";
import CopyRightImage from "./CopyRightImage"
import 'react-alice-carousel/lib/alice-carousel.css';
import jeff from "../assets/images/jeff.png"
import wolf from "../assets/images/wolf.png"



const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
};

const items = [
    <div className="item multiple" data-value="1">
      <h4 style={{color:"white"}}> "Price is what you pay. Value is what you get. Use TickerTok"</h4>
      <h2 style={{color:"#DAFF57"}}>
        Warren Buffet
      </h2>
    </div>,

    <div className="item multiple" data-value="6">
    <h4 style={{color:"white"}}> " I am a bot. Use TickerTok"</h4>
    <h2 style={{color:"#DAFF57"}}>
      Mark Zuckerberg
    </h2>

    </div>,
    <div className="item multiple" data-value="2">
    <h4 style={{color:"white"}}> "Life is not fair; get used to it. Use TickerTok"</h4>
    <h2 style={{color:"#DAFF57"}}>
      Bill Gates
    </h2>
    </div>,
    <div className="item multiple" data-value="3">
    <h4 style={{color:"white"}}> "When something is important enough, you do it even if the odds are not in your favor. Use TickerTok"</h4>
    <h2 style={{color:"#DAFF57"}}>
      Elon Musk
    </h2>
    </div>,
    <div className="item multiple" data-value="4">
    <h4 style={{color:"white"}}> " All that we are arises with our thoughts. With our thoughts, we make the world. Use TickerTok"</h4>
    <h2 style={{color:"#DAFF57"}}>
    The Buddha
    </h2>
    </div>,

    <div className="item multiple" data-value="5">
    <h4 style={{color:"white"}}> " Resentment is like drinking poison and then hoping it will kill your enemies. Use TickerTok"</h4>
    <h2 style={{color:"#DAFF57"}}>
      Nelson Mandela
    </h2>
    </div>
];


const Carousel = () => (
  <div>
    <Navbar />
    <Container>
    <h1> Press </h1>
    <AliceCarousel
        autoPlay
        mouseTracking
        autoPlayInterval={3000}
        items={items}
        responsive={responsive}
    />
   <CopyLeftImage
     header="Learn From The Master"
     followUp="Here are some extra resources that may be useful to you!Here are some extra resources that may be useful to you!"
     sellingPointImage = {jeff}
    />
  <CopyRightImage
    header="Finance 101"
    followUp="Here are some extra resources that may be useful to you!Here are some extra resources that may be useful to you!"
    sellingPointImage = {wolf}
   />
   </Container>
   </div>
)





export default Carousel
