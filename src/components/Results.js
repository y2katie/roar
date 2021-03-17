import React, { Component, createRef } from "react";
import _ from "lodash";

import {
  Grid,
  Header,
  Image,
  Rail,
  Ref,
  Segment,
  Sticky,
  Container,
  Card,
  Placeholder,
} from "semantic-ui-react";
import SearchBox from "./SearchBox";
import Stockcard from "./StockCard";
import StockNews from "./StockNews";
import QuoteCard from "./QuoteCard";

import Test from "./Test";
import Peers from "./Peers";
import HotStocks from "./HotStocks";

import Statistic from "./Statistic";
import DividerExampleHorizontalTable from "./Divider";

import MetricCard from "./MetricCard";

import Navbar from "./Navbar";
import axios from "axios";

class Results extends React.Component {
  state = {
    stockProfile: "",
    metricList: "",
    selectedStock: null,
    news: [],
    peers: [],
    trends: [],
    loading: false,
    stockNames: [],
    prices: [],
    quote: "",
    companyInfo: "",
    hotStocks: [],
  };

  contextRef = createRef();

  onStockSelect = async (stock, symbol) => {
    console.log(stock);
    await Promise.all([
      axios.get(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${stock.toUpperCase()}&${
          process.env.REACT_APP_API_KEY
        }`
      ),
      axios.get(
        `https://finnhub.io/api/v1/stock/recommendation?symbol=${stock.toUpperCase()}&${
          process.env.REACT_APP_API_KEY
        }`
      ),
      axios.get(
        `https://finnhub.io/api/v1/stock/metric?symbol=${stock.toUpperCase()}&metric=all&${
          process.env.REACT_APP_API_KEY
        }`
      ),
      axios.get(
        `https://finnhub.io/api/v1/company-news?symbol=${stock.toUpperCase()}&from=2020-04-30&to=2020-05-01&${
          process.env.REACT_APP_API_KEY
        }`
      ),
      axios.get(
        `https://finnhub.io/api/v1/stock/peers?symbol=${stock.toUpperCase()}&${
          process.env.REACT_APP_API_KEY
        }`
      ),
      axios.get(
        `https://api.polygon.io/v1/open-close/${stock.toUpperCase()}/2020-10-14?unadjusted=true&${
          process.env.REACT_APP_POLYGON
        }`
      ),
      axios.get(
        `https://api.polygon.io/v1/meta/symbols/${stock.toUpperCase()}/company?&${
          process.env.REACT_APP_POLYGON
        }`
      ),
    ]).then(([res, res1, res2, res3, res4, res5, res6]) => {
      console.log(res.data);
      console.log(res1.data);
      console.log(res2.data);
      console.log(res3.data);
      console.log(res4.data);
      console.log(res5.data);
      console.log(res6.data);
      this.setState({
        stockProfile: res.data,
        trends: res1.data.slice(0, 1),
        selectedStock: res2.data.metric,
        news: res3.data.slice(0, 6),
        peers: res4.data,
        quote: res5.data,
        companyInfo: res6.data,
      });
    });
  };

  render() {
    return (
      <Container>
        <Grid centered className="stackable" >
          <Grid.Column>
            <Navbar />
            <HotStocks />
            <SearchBox onSubmit={this.onStockSelect} />

            <Statistic
              trends={this.state.trends}
              stockProfile={this.state.stockProfile}
            />

            {this.state.stockProfile ? (

                    <Stockcard
                      stockProfile={this.state.stockProfile}
                      peers={this.state.peers}
                      quote={this.state.quote}
                      companyInfo={this.state.companyInfo}
                      onStockSelect={this.onStockSelect}
                      style={{ marginTop: "20px" }}
                    />

            ) : (
              <Card.Group itemsPerRow={3} style={{ marginTop: "30px" }}>
                <Card>
                  <Card.Content>
                    <Placeholder>
                      <Placeholder.Image square />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                    </Placeholder>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Placeholder>
                      <Placeholder.Image square />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                    </Placeholder>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Placeholder>
                      <Placeholder.Image square />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                    </Placeholder>
                  </Card.Content>
                </Card>
              </Card.Group>
            )}


            <MetricCard
              selectedStock={this.state.selectedStock}
              onStockSelect={this.onStockSelect}
            />
            <Peers peers={this.state.peers} />

            <StockNews
              news={this.state.news}
              onStockSelect={this.onStockSelect}
            />

            <QuoteCard
              stockProfile={this.state.stockProfile}
              quote={this.state.quote}
              onStockSelect={this.onStockSelect}
              style={{ marginTop: "20px" }}
            />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Results;
