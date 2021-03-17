import React from "react";
import ParticlesBg from "particles-bg";
import Copy from "./Copy";
import Results from "./Results";

import Navbar from "./Navbar";
import { Link }  from "react-router-dom"
import { Route }  from "react-router-dom"


const Frames = () => {

  let config = {
      num: [1, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-40, 40],
      // body: "./img/icon.png", // Whether to render pictures
      rotate: [0, 20],
      alpha: [0.6, 0],
      scale: [1, 0.1],
      backgroundColor:"black",
      position: "center", // all or center or {x:1,y:1,width:100,height:100}
      color: ["#A51080", "#eee"],
      cross: "dead", // cross or bround
      random: 25,  // or null,
      g: 2,    // gravity
      // f: [2, -1], // force
      onParticleUpdate: (ctx, particle,config) => {
          ctx.beginPath();
          ctx.rect(particle.p.x, particle.p.y, particle.radius * 8, particle.radius * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
      }
    }

    return (
      <div className="stackable" stackable>
      <Navbar />
      <Copy
        smallHeader=  "when it comes to building wealth, investing is how you do it"
        headLine= "The Topic of Investing Can be Intimidating."
        body = "Complex financial terms, market swings and varying opinions from friends, family, and on social media can make anyone shy away from creating an investment portfolio."
        cta = <Link to="/results"> Click </Link>
        />
      <h1>  <Route path="/results" component={Results}> Click </Route> </h1>
        <ParticlesBg config={config} backgroundColor="black" color={["yellow", "#A51080","orange"]} type="polygon" bg={true} className="testing"/>
      </div>
    );

}

export default Frames
