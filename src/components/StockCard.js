import React from "react";
import {
  Container,
  Label,
  Header,
  Item
} from "semantic-ui-react";


const StockItem = ({ stockProfile, peers, onStockSelect, companyInfo, quote }) => {
  if (!stockProfile || !companyInfo || !quote || !peers) {
    return <div style={{ display: "none" }}> </div>;
  }

  return (
    <Container className="stockcard">

      <Item.Group divided centered style={{ marginTop: "20px", width:"80%", margin:"0 auto" }}>
        <Item>
          <Item.Content>
            <Header size='huge' style={{color:"white"}}> {stockProfile.name} </Header>
             <h1> ${quote.open} </h1>
            <Item.Description>
            </Item.Description>
          </Item.Content>
          <Item.Content extra>
            <Item.Description style={{marginLeft:"40px"}}>
            <Item.Meta><b>Ticker:</b> {stockProfile.ticker}</Item.Meta>
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
