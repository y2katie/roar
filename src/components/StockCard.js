import React from "react";
import {
  Container,
  Label,
  Icon,
  Column,
  List,
  Button,
  Item,
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

const StockItem = ({ stockProfile, peers, onStockSelect, companyInfo, quote }) => {
  if (!stockProfile || !companyInfo || !quote || !peers) {
    return <div style={{ display: "none" }}> </div>;
  }

  return (
    <Container>

      <Item.Group divided centered style={{ marginTop: "20px", width:"80%", margin:"0 auto" }}>
        <Item>
          <Item.Content>
            <h1>{stockProfile.name}</h1>
             <h1> ${quote.open} </h1>
            <Item.Description>
            </Item.Description>
          </Item.Content>
          <Item.Content extra>
            <Item.Description style={{marginLeft:"40px"}}>
            <Item.Meta>Ticker: {stockProfile.ticker}</Item.Meta>
            <a href={stockProfile.weburl}> Visit Site </a> <br />

              <p> <b> About: </b> {companyInfo.description} </p>

              <Label>Industry: {companyInfo.industry} </Label>
              <Label style={{ marginTop: "5px" }}>
                Sector: {companyInfo.sector}
              </Label>
            </Item.Description>
          </Item.Content>
        </Item>





          </Item.Group>

      </Container>
  );
};

export default StockItem;
