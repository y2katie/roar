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
    <Container style={{ textAlign: "center" }}>
      <List horizontal style={{ textAlign: "center" }}>
        <List.Item>
          <List.Content>
            <List>
              {" "}
              <b>Open:</b> ${quote.open}{" "}
            </List>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List>
              <b>Close:</b> ${quote.close}{" "}
            </List>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List>
              <b> Volume:</b> ${quote.volume}
            </List>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List>
            <b>  Low: </b> ${quote.low}{" "}

            </List>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List>
            <b>  Afterhours: </b> ${quote.afterHours}{" "}

            </List>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            <List>
            <b>  PreMarket: </b> ${quote.preMarket}{" "}

            </List>
          </List.Content>
        </List.Item>
      </List>
    </Container>
  );
};

export default QuoteCard;
