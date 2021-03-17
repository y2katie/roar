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
        Exchange: <b> {hotties.exchange} </b><br />
        </Card.Content>

        <Card.Content extra>
        Last Price: <b> ${hotties.lastPrice} </b> <br />
        Price Change:<b> ${hotties.priceChange} </b>
        </Card.Content>
      </Card>
       </Card>
       </Grid.Column>

       </>
)
     }
export default HotCard;
