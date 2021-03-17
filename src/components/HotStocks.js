import React from "react"
import Hotties from "./Hotties"
import {Container, Button, Grid, Image } from 'semantic-ui-react'

import axios from "axios"

class HotStocks extends React.Component {
  state = {
    hotties: []
  }

  componentDidMount(){
    axios.get('https://morning-star.p.rapidapi.com/market/v2/get-movers', {
      headers: {
          'x-rapidapi-key': `${process.env.REACT_APP_MORNING_STAR}`,
          'x-rapidapi-host': 'morning-star.p.rapidapi.com'
        }
      })
      .then( (response) => {
        this.setState({hotties:response.data.actives.slice(0,5)})
      })
  }

  render(){
    return(
      <Container>
      <Grid columns='three' divided>
      <Grid.Row>


      <Hotties hotties={this.state.hotties}/>


      </Grid.Row>

      </Grid>
      </Container>

    )
  }
}

export default HotStocks;
