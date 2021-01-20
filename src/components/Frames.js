import React, { Component } from "react";
import { render } from "react-dom";
import ParticlesBg from "particles-bg";


class Frames extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <ParticlesBg type="random" bg={true}/>
      </div>
    );
  }
}

export default Frames
