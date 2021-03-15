import React from "react";
import { List, Container } from 'semantic-ui-react'

const ListExampleDivided = ({peers}) => {
  if(!peers){
  return <div style={{ display: "none" }}> </div>;
}

  const lists = peers.map( (peer) => {

    return(
      <>
      <List horizontal>
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
    <Container centered className="centered">
      {lists}
    </Container>
  )

}

export default ListExampleDivided
