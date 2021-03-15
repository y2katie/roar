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

const StockCard = ({ stockProfile, peers, onStockSelect, companyInfo }) => {
  if (!stockProfile || !companyInfo) {
    return <div style={{ display: "none" }}> </div>;
  }

  return (
    <Container>
      <Card.Group centered style={{ marginTop: "180px" }}>
        <Card>
          <Card.Content>
            <h1>{stockProfile.name}</h1>
            <Card.Meta>Ticker: {stockProfile.ticker}</Card.Meta>
            <Card.Description>
              <a href={stockProfile.weburl}> Visit Site </a> <br />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Card.Description>
              <p> {companyInfo.description} </p>

              <Label>Industry: {companyInfo.industry} </Label>
              <Label style={{ marginTop: "5px" }}>
                Sector: {companyInfo.sector}
              </Label>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  );
};

export default StockCard;
