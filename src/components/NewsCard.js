import React from "react";
import { Grid, Card, Image, Item } from 'semantic-ui-react'

  const NewsCard = ({news}) => {
    return (
      <>
    <Item.Group stackable>
    <Item>
      <Item.Image floated='right'
      size='medium'
      src={news.image}
      style={{borderRadius:"10px"}} />

      <Item.Content>
        <Item.Header style={{textAlign:"left"}}>{news.headline}</Item.Header>
        <Item.Meta>
          <span className='stay'><a href={news.url}> Read More </a></span>
        </Item.Meta>
        <Item.Description>{news.summary.slice(0,500)+ "..."}</Item.Description>
      </Item.Content>
    </Item>

       </Item.Group>

       </>
)
     }
export default NewsCard;
