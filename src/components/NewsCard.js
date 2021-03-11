import React from "react";
import { Button, Card, Image } from 'semantic-ui-react'

  const NewsCard = ({news}) => {
    return (
      <>

      <Card>
         <Card.Content>
             <Image
               floated='right'
               size='mini'
               src={news.image}
             />
             <Card.Header>{news.headline} </Card.Header>
             <Card.Meta>{news.related}</Card.Meta>
              <Card.Meta><a href={news.url}> Read More </a> </Card.Meta>
             <Card.Description>
              {news.summary}
             </Card.Description>
           </Card.Content>

       </Card>
       </>
)
     }
export default NewsCard;
