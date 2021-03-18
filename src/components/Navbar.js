import React from 'react'
import {
  Icon
} from "semantic-ui-react";
import { Link }  from "react-router-dom"

const Navbar = () => {
  return (
    <div class="ui secondary menu topMenu stackable">
    <Link to= "/" class='item'>
       <h2 style={{fontWeight:"700"}}> <Icon name="pin" />TickerTok </h2>
    </Link>

    <div class="right menu">
    <Link to="/carousel" class="item">
      Press
    </Link>
    <Link to="/faq" class="item">
      FAQ
    </Link>
    <Link to="/results" class="item">
      How It Works
    </Link>


    <div class="item">
      <div class="ui animated button" tabindex="0">
        <div class="visible content"> Learn More </div>
          <div class="hidden content">
            <i class="right arrow icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}


export default Navbar
