import React from "react";
import {Container, Button, Card, Image } from 'semantic-ui-react'

  const test = ({stockNames}) => {
    if (!stockNames) {
      return null
    }
    console.log("coming from",stockNames)





    return (
      <>
      {stockNames.map( (peer) => {
            return  <li style={{color:"white"}}> {peer.symbol}</li>
          })}
      </>
    )
  }

  export default test
