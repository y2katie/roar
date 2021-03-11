import React from "react";
import {Container, Button, Card, Image } from 'semantic-ui-react'

  const StockCard = ({stockProfile, onStockSelect}) => {
    if (!stockProfile) {
      return null
    }

    return (
      <Container style={{marginBottom:"20px"}}>
      <Card onClick={() => onStockSelect(stockProfile)}>
         <Card.Content>
           <Image
             floated='right'
             size='mini'
             src={stockProfile.logo}
           />
           <Card.Header>{stockProfile.finnhubIndustry} </Card.Header>
           <Card.Meta>{stockProfile.name}</Card.Meta>
           <Card.Description>
            {stockProfile.ticker}
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
           <div className='ui two buttons'>
             <Button basic color='green'>
             {stockProfile.ipo}
             </Button>
             <Button basic color='red'>
             {stockProfile.exchange}
             </Button>
           </div>
         </Card.Content>
       </Card>
       </Container>

    )
  }

  export default StockCard
