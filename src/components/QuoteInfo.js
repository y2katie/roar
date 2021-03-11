import React from "react";
import {Container, Button, Card, Image } from 'semantic-ui-react'

  const QuoteInfo = ({quote, onStockSelect}) => {
    if (!quote) {
      return null
    }
console.log(quote);
    return (
      <Container style={{marginBottom:"20px"}}>
      <Card >
         <Card.Content>

           <Card.Header>High{quote.h} </Card.Header>
           <Card.Meta>Close {quote.c}</Card.Meta>
           <Card.Description>
            {quote.o}
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
           <div className='ui two buttons'>
             <Button basic color='green'>
             {quote.c}
             </Button>
             <Button basic color='red'>
             {quote.h}
             </Button>
           </div>
         </Card.Content>
       </Card>
       </Container>

    )
  }

  export default QuoteInfo
