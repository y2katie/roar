import React from "react";
import { Container, Button, Card, Grid, Image } from "semantic-ui-react";

const StockCard = ({ stockProfile, trends, peers, onStockSelect }) => {
  if (!stockProfile && !trends) {
    return  <div style={{display:"none"}}> </div>
  }

  return (
 <Grid columns='equal'>
 <Grid.Row>
      <Grid.Column>
    <Container style={{marginBottom:"20px"}}>
    <Card.Group center columns='equal'>

    <Card>
    <h1 style={{color:"black", textAlign:'left'}}> Information </h1>

    <Image
    className="centered"
      size='tiny'
      src={stockProfile.logo}
    /><br />
      <Card.Content>
      <Card.Meta>Ticker: {stockProfile.ticker}</Card.Meta>

        <Card.Header style={{textAlign:"center"}}>{stockProfile.name}</Card.Header>
        <Card.Description>
        Sector: {stockProfile.finnhubIndustry} <br />
        Exchange: {stockProfile.exchange} <br />
        Visit Site: {stockProfile.url} <br />
        </Card.Description>
        <Card.Content extra style={{marginTop:"20px"}}>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Market Cap: {stockProfile.marketCapitalization}
            </Button>
            <Button basic color='red'>
            Currency: {stockProfile.currency}


            </Button>
          </div>
        </Card.Content>
      </Card.Content>

    </Card>

    <Card>
    <h1 style={{color:"black", textAlign:'left'}}> Recommendations </h1>

      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={stockProfile.logo}
        />
        <Card.Header>{stockProfile.name} Recommendations</Card.Header>
        <Card.Meta>  Period:  {trends.map( (trend) => {
            return <> {trend.period} </>
          })}</Card.Meta>
        <Card.Description>
        Buy:  {trends.map( (trend) => {
          return <> {trend.buy} </>
        })}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
    PEers
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/jenny.jpg'
        />
        <Card.Header>    Peers:  {peers.map( (peer) => {
              return  <li> {peer}</li>
            })}</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
    </Container>
    </Grid.Column>
      </Grid.Row>
    </Grid>


  );

};

export default StockCard;
