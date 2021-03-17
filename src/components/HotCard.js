import React from "react";
import { Card, Image,Grid } from 'semantic-ui-react'

  const HotCard = ({hotties}) => {
    return (
      <>
    <Grid.Column stackable>
      <Card style={{marginTop:"20px"}}>
      <Card>
        <Card.Content> <h2> {hotties.standardName} </h2> </Card.Content>
          <Card.Content> <h4>Ticker:  {hotties.ticker} </h4> </Card.Content>
        <Card.Content description>
        <b> Exchange: </b> {hotties.exchange} <br />
        </Card.Content>

        <Card.Content extra>
        <b>Last Price: </b> ${hotties.lastPrice} <br />
        <b>Price Change:</b> ${hotties.priceChange} 
        </Card.Content>
      </Card>
       </Card>
       </Grid.Column>

       </>
)
     }
export default HotCard;
