import React from "react";
import {Container, Button, Card, Image } from 'semantic-ui-react'

  const trendsInfo = ({trends, onStockSelect}) => {
    if (!trends) {
      return null
    }

    const list = trends.map( (trend) => {
      return (
        <Card>
          <Card.Content header='About Amy' />
          <Card.Content description={trend.buy} />
          <Card.Content extra>
          
          </Card.Content>
        </Card>
      )
    })


    return (
      <Container>
     {list}
     </Container>
    )
  }

  export default trendsInfo
