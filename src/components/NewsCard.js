import React from "react";
import { Grid, Button, Card, Image } from 'semantic-ui-react'

  const NewsCard = ({news}) => {
    return (
      <>
    <Grid.Column stackable>
      <Card style={{marginTop:"20px"}}>
         <Card.Content>
             <Image
               floated='right'
               size='medium'
               src={news.image}
               style={{borderRadius:"10px"}}
             />
             <Card.Header>{news.headline} </Card.Header>
             <Card.Meta>{news.related}</Card.Meta>
              <Card.Meta><a href={news.url}> Read More </a> </Card.Meta>
             <Card.Description>
              {news.summary.slice(0,100)+ "..."}
             </Card.Description>
           </Card.Content>
       </Card>
       </Grid.Column>

       </>
)
     }
export default NewsCard;
