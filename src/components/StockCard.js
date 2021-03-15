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
  Rail,
} from "semantic-ui-react";

const paragraph = (
  <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
);

const StockCard = ({ stockProfile, trends, peers, onStockSelect, quote }) => {
  if (!stockProfile || !trends || !peers) {
    return <div style={{ display: "none" }}> </div>;
  }

  console.log(quote.open);
  return (
    <Container>
      <Card.Group centered style={{ marginTop: "180px" }}>
        <Card>
          <Card.Content>
            <img src={stockProfile.logo} size="mini" />
            <h1>{stockProfile.name}</h1>
            <Card.Meta>Ticker: {stockProfile.ticker}</Card.Meta>
            <Card.Description>
              <a href={stockProfile.weburl}> Visit Site </a> <br />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>

          <Card.Description>
            Sector: {stockProfile.finnhubIndustry} <br />
            Market Cap: {stockProfile.marketCapitalization}
          </Card.Description>
          </Card.Content>

        
        </Card>
      </Card.Group>
    </Container>
  );
};

export default StockCard;
