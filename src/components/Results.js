import React from "react"
import axios from 'axios';
import { Button, Card, Image } from 'semantic-ui-react'

class Results extends React.Component {

state = {
   price: [],
   stocks:[]
 }


 componentDidMount() {
   Promise.all ([
     axios.get(`https://api.polygon.io/v1/open-close/AAPL/2020-10-14?unadjusted=true&apiKey=${process.env.REACT_APP_API_KEY}`),
      axios.get(`https://api.polygon.io/v1/meta/symbols/AAPL/company?&apiKey=${process.env.REACT_APP_API_KEY}`)
  ]).then( ([res1, res2]) => {
    console.log(res1.data)
    console.log(res2.data)
    this.setState({price: res1.data, stocks:res2.data})
  })

 }



 render() {
   return (
     <Card.Group>
    <Card>
      <Card.Content>
      Symbol: {this.state.price.symbol}<br />
    CEO: {this.state.stocks.ceo}<br />
    Visit: <a href={this.state.stocks.url}> Website </a>
        <Image
          floated='right'
          size='mini'
          src={this.state.stocks.logo}
        />
        <Card.Header>

                  Description: {this.state.stocks.description}<br /></Card.Header>
        <Card.Meta>        <b> Industry:</b> {this.state.stocks.industry}<br />
</Card.Meta>
        <Card.Description>
        <b> Symbol </b>{this.state.price.symbol}<br />
        <b> Employees: </b> {this.state.stocks.employees}<br />
        <b> Sector: </b>{this.state.stocks.sector}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
          Open: {this.state.price.open}<br />
          High: {this.state.price.high}


          </Button>
          <Button basic color='red'>
          Low: {this.state.price.low} <br />
          Symbol: {this.state.price.symbol} <br />
          </Button>
        </div>
      </Card.Content>
    </Card>
    </Card.Group>

   )
 }
}


export default Results
