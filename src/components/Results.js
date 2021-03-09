import React from "react";
import SearchBox from "./SearchBox";
import axios from "axios";
import { Button, Card, Image } from "semantic-ui-react";

class Results extends React.Component {
  state = {
    price: [],
    company: [],
  };

  onSearchSubmit = async (stock) => {
    console.log(stock);
    await Promise.all([
      axios.get(
        `https://api.polygon.io/v1/open-close/${stock}/2020-10-14?unadjusted=true&apiKey=${process.env.REACT_APP_API_KEY}`
      ),
      axios.get(
        `https://api.polygon.io/v1/meta/symbols/${stock}/company?&apiKey=${process.env.REACT_APP_API_KEY}`
      ),
    ]).then(([res1, res2]) => {
      console.log(res1.data);
      console.log(res2.data);
      this.setState({ price: res1.data, company: res2.data });
    });
  };

  render() {
    return (
      <>
        <SearchBox onSubmit={this.onSearchSubmit} />
        <Card.Group>
          <Card style={{ marginTop: "130px" }}>
            <Card.Content>
              Symbol: {this.state.price.symbol}
              <br />
              CEO: {this.state.company.ceo}
              <br />
              Visit: <a href={this.state.company.url}> Website </a>
              <Image
                floated="right"
                size="mini"
                src={this.state.company.logo}
              />
              <Card.Header>
                Description: {this.state.company.description}
                <br />
              </Card.Header>
              <Card.Meta>
                {" "}
                <b> Industry:</b> {this.state.company.industry}
                <br />
              </Card.Meta>
              <Card.Description>
                <b> Symbol </b>
                {this.state.price.symbol}
                <br />
                <b> Employees: </b> {this.state.company.employees}
                <br />
                <b> Sector: </b>
                {this.state.company.sector}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Open: {this.state.price.open}
                  <br />
                  High: {this.state.price.high}
                </Button>
                <Button basic color="red">
                  Low: {this.state.price.low} <br />
                  Symbol: {this.state.price.symbol} <br />
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </>
    );
  }
}

export default Results;
