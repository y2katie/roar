import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <div className="item" data-value="1" ><img src="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-06/gluten-free-whole-grain-scones.jpg?itok=fq0X_1Zo" alt="cookies"/></div>,
    <div className="item" data-value="2"><img src="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/6079-3-large.jpg?itok=VWwKm7jt" alt="cake"/></div>,
    <div className="item" data-value="3" ><img src="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-12/cinnamon-star-bread-10_0917.jpg?itok=Q3oxjr29" alt="yum"/></div>,
    <div className="item" data-value="4" ><img src="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-06/gluten-free-whole-grain-scones.jpg?itok=fq0X_1Zo" alt="cookies"/></div>,
    <div className="item" data-value="5" ><img src="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/recipe_legacy/6079-3-large.jpg?itok=VWwKm7jt" alt="cookies"/></div>,
];

const Carousel = () => (
  <div>
      <AliceCarousel
             autoPlay = "none"
             autoPlayControls="hidden"
             autoPlayStrategy="none"
             animationType="fadeout"
             autoPlayInterval={2500}
             animationDuration={1000}
             infinite
             touchTracking={false}
             disableDotsControls
             disableButtonsControls
             items={items}
         />
     </div>
)



export default Carousel
