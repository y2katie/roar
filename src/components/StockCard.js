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

const StockCard = ({ stockProfile, trends, peers, onStockSelect }) => {
  if (!stockProfile || !trends || !peers) {
    return <div style={{ display: "none" }}> </div>;
  }

  return (
<Container>
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
        <Item.Image size="tiny" src={stockProfile.logo} />

        <Item.Content>
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
            <Label icon="globe" content="Additional Languages" />
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
        <Item.Image size="tiny" src={stockProfile.logo} />

        <Item.Content>
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
            <Label icon="globe" content="Additional Languages" />
          </Item.Extra>
        </Item.Content>
      </Item>      </Grid.Column>
    </Grid>

    <Divider vertical></Divider>
  </Segment>


</Container>


  );
};

export default StockCard;
