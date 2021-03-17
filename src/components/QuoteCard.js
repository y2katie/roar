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

const QuoteCard = ({ stockProfile, onStockSelect, quote }) => {
  if (!stockProfile || !quote) {
    return <div style={{ display: "none" }}> </div>;
  }

  console.log(quote.open);
  return (
    <Container style={{textAlign:"center"}}>
    <List horizontal style={{textAlign:"center"}}>
    <List.Item>
    <h1> Quotes </h1>
      <Image src={stockProfile.logo} size="mini" />
      <List.Content>
        <List>Open: ${quote.open} </List>
      </List.Content>

    </List.Item>
    <List.Item>
    <Image src={stockProfile.logo} size="mini" />

    <List.Content>

      <List>Close: ${quote.close} </List>
    </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
      <List.Content>
        <List>Volume: ${quote.volume}
      Low: ${quote.low} </List>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
      <List.Content>
        <List>Afterhours: ${quote.afterHours}
        PreMarket: ${quote.preMarket}</List>
      </List.Content>
    </List.Item>
  </List>
  </Container>

  );
};

export default QuoteCard;
