import React from "react";
import HotCard from "./HotCard"
import {Container, Button,Grid, Card, Image, Placeholder } from 'semantic-ui-react'

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
      <Container stackable>
      <h1> Hot Stocks </h1>

      <Grid columns='five'stackable divided>
      <Grid.Row>


{hotties.length > 0 ? <> {list} </> :
<>
<Grid.Column inverted stackable width={3}>
  <Placeholder inverted>
    <Placeholder.Line inverted />
    <Placeholder.Line inverted />
    <Placeholder.Line inverted/>
    <Placeholder.Line inverted/>
  </Placeholder>
</Grid.Column>
<Grid.Column width={3}>
<Placeholder inverted>
  <Placeholder.Line inverted />
  <Placeholder.Line inverted />
  <Placeholder.Line inverted/>
  <Placeholder.Line inverted/>
</Placeholder>
</Grid.Column>
<Grid.Column width={3}>
<Placeholder inverted>
  <Placeholder.Line inverted />
  <Placeholder.Line inverted />
  <Placeholder.Line inverted/>
  <Placeholder.Line inverted/>
</Placeholder>
</Grid.Column>
<Grid.Column width={3}>
<Placeholder inverted>
  <Placeholder.Line inverted />
  <Placeholder.Line inverted />
  <Placeholder.Line inverted/>
  <Placeholder.Line inverted/>
</Placeholder>
</Grid.Column>
<Grid.Column width={3}>
<Placeholder inverted>
  <Placeholder.Line inverted />
  <Placeholder.Line inverted />
  <Placeholder.Line inverted/>
  <Placeholder.Line inverted/>
</Placeholder>
</Grid.Column>

          </>
}




      </Grid.Row>

      </Grid>
     </Container>
    )
  }

  export default Hotties
