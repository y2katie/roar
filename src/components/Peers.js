import React from "react";
import { List, Container } from 'semantic-ui-react'

const ListExampleDivided = ({peers}) => {
  if(!peers) return;
  console.log(peers);

  const lists = peers.map( (peer) => {
    <h1> Peers </h1>

    return(
      <>

      <List relaxed horizontal centered>
        <List.Item>
          <List.Icon name='money bill alternate outline' size='large' color="white" verticalAlign='middle' />
          <List.Content verticalAlign='middle'>
            <List.Description as='a'>{peer}</List.Description>
          </List.Content>
        </List.Item>
      </List>
      </>
    )
  })

  return (
    <Container>
    <h1> Peers: </h1> <br/>
      {lists}
    </Container>
  )

}

export default ListExampleDivided