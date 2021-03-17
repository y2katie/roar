import React from "react";
import HotCard from "./HotCard"
import {Container, Button,Grid, Card, Image } from 'semantic-ui-react'

  const Hotties = ({hotties}) => {
    if (!hotties) {
      return null
    }

    const list = hotties.map( (hotties) => {
      return (
    <>
    <HotCard hotties={hotties} />
    </>
      )
    })


    return (
      <Container>
      <h1> Hot Stocks </h1>

      <Grid columns='five' divided>
      <Grid.Row>

      {list}

      </Grid.Row>

      </Grid>
     </Container>
    )
  }

  export default Hotties
