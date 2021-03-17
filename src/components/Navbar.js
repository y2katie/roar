import React from 'react'
import { Link }  from "react-router-dom"
import guru from "../assets/images/guru.png"

const Navbar = () => {
  return (
    <div class="ui secondary menu topMenu">
    <Link to= "/" class='item'>
      <img className="logo" src= {guru} alt="logo" />
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
