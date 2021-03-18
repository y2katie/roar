import React from "react";
import { Card,Grid } from 'semantic-ui-react'

  const HotCard = ({hotties}) => {
    return (
      <>
    <Grid.Column stackable>
      <Card style={{marginTop:"20px"}}>
      <Card>
        <Card.Content> <h2>  {hotties.ticker} </h2> </Card.Content>
          <Card.Content> <h4>{hotties.standardName}</h4> </Card.Content>
        <Card.Content description>

        <Card.Content extra>
        <b>Last Price: </b> ${hotties.lastPrice} <br />
        <b>Price Change:</b> ${hotties.priceChange}
        </Card.Content>
        </Card.Content>

      </Card>
       </Card>
       </Grid.Column>

       </>
)
     }
export default HotCard;
