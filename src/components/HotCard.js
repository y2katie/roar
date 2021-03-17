import React from "react";
import { Card, Image,Grid } from 'semantic-ui-react'

  const HotCard = ({hotties}) => {
    return (
      <>
    <Grid.Column stackable>
      <Card style={{marginTop:"20px"}}>
      <Card>
        <Card.Content header={hotties.standardName} />
          <Card.Content header={hotties.ticker} />
        <Card.Content description>
        Ticker: {hotties.ticker} <br />
        Exchange: {hotties.exchange} <br />
        </Card.Content>

        <Card.Content extra>
        Last Price: ${hotties.lastPrice} <br />
        Price Change: ${hotties.priceChange}
        </Card.Content>
      </Card>
       </Card>
       </Grid.Column>

       </>
)
     }
export default HotCard;
