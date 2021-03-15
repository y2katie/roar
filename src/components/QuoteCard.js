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
    <Container>
      <Card.Group centered style={{ marginTop: "180px" }}>
        <Card>

          <Card.Content extra>
            <Item.Description>
            <h4> Quote </h4>
              Open: ${quote.open} <br />
              Close: ${quote.close} <br />
              Volume: ${quote.volume} <br />
              Low: ${quote.low} <br />
              Afterhours: ${quote.afterHours} <br />
              PreMarket: ${quote.preMarket} <br />
            </Item.Description>
            <Item.Extra>
              <Label> Currency: {stockProfile.currency}</Label>
            </Item.Extra>
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  );
};

export default QuoteCard;
