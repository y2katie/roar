import React from "react";
import {
  Container,
  Item,
  Label,
  Icon,
  Column,
  List,
  Button,
  Card,
  Grid,
  Image,
  Form,
  Divider,
  Segment,
  Sticky,
  Rail
} from "semantic-ui-react";

const paragraph = (
  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
);

const StockCard = ({ stockProfile, trends, peers, onStockSelect, quote }) => {
  if (!stockProfile || !trends || !peers) {
    return <div style={{ display: "none" }}> </div>;
  }

console.log(quote);
  return (
<Container>

<Card.Group centered >
</Card.Group>
<Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
      <Item
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
        }}
      >

        <Item.Content color='green'>
          <h1>{stockProfile.name}</h1>
          <Card.Meta>Ticker: {stockProfile.ticker}</Card.Meta>
          <Item.Meta>
            <span className="cinema">
              <a href={stockProfile.weburl}> Visit Site </a> <br />
            </span>
          </Item.Meta>
          <Item.Description>
            Sector: {stockProfile.finnhubIndustry} <br />
            Market Cap: {stockProfile.marketCapitalization}
          </Item.Description>
          <Item.Extra>
            <Label> Exchange: {stockProfile.exchange}</Label>
          </Item.Extra>
        </Item.Content>
      </Item>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
      <Item
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
        }}
      >

        <Item.Content>
        <img src={stockProfile.logo} size="mini" />
          <Card.Meta>Ticker: {quote.o}</Card.Meta>

          <Item.Description>
            Open: {quote.c} <br />
            Close: {stockProfile.marketCapitalization}
            Open: {quote.c} <br />
            Close: {stockProfile.marketCapitalization}
          </Item.Description>
          <Item.Extra>
            <Label> Currency: {stockProfile.currency}</Label>
          </Item.Extra>
        </Item.Content>
      </Item>      </Grid.Column>
    </Grid>

    <Divider vertical> or </Divider>
  </Segment>


</Container>


  );
};

export default StockCard;
