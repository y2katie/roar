import React from 'react'
import { Menu } from 'semantic-ui-react'
import roar from "../assets/images/roar.png"

const Navbar = () => {
  return (
    <div class="ui secondary menu topMenu">
    <div class='item'>
      <img className="logo" src= {roar} />
    </div>

    <div class="right menu">
    <a class="item">
      Home
    </a>
    <a class="item">
      Messages
    </a>
    <a class="item">
      Friends
    </a>
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
