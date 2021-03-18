import React, { createRef } from "react";

import {
  Grid,
  Container
} from "semantic-ui-react";
import SearchBox from "./SearchBox";
import Stockcard from "./StockCard";
import StockNews from "./StockNews";
import QuoteCard from "./QuoteCard";
import Bigsearch from "./Bigsearch";

import HotStocks from "./HotStocks";
import Statistic from "./Statistic";

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
    testing:[]
  };

  contextRef = createRef();


  testingSearch = async(stock,value) => {
    console.log(stock, "stock");
    console.log(value, "value");

    await axios.get('https://morning-star.p.rapidapi.com/market/v2/auto-complete', {
      params: {q:`${stock}`},
      headers: {
          'x-rapidapi-key': `${process.env.REACT_APP_MORNING_STAR}`,
          'x-rapidapi-host': 'morning-star.p.rapidapi.com'
        }
      })
      .then( (response) => {
        console.log(response.data);
      this.setState({testing:response.data});

      })
  }

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
      <Container fluid stackable>
        <Grid centered className="stackable">
        <Grid.Column>

        <Navbar />
        <HotStocks />


            <SearchBox onSubmit={this.onStockSelect} onChange={this.testingSearch} />


            <Stockcard
              stockProfile={this.state.stockProfile}
              peers={this.state.peers}
              quote={this.state.quote}
              companyInfo={this.state.companyInfo}
              onStockSelect={this.onStockSelect}
              style={{ marginTop: "20px" }}
            />
            <QuoteCard
              onStockSelect={this.onStockSelect}
              quote={this.state.quote}
              stockProfile={this.state.stockProfile}
            />
            <Statistic
              trends={this.state.trends}
              stockProfile={this.state.stockProfile}
            />

            <MetricCard
              selectedStock={this.state.selectedStock}
              onStockSelect={this.onStockSelect}
            />

            <StockNews
              news={this.state.news}
              onStockSelect={this.onStockSelect}
            />




          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Results;
