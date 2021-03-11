import React from "react";
import SearchBox from "./SearchBox";
import Stockcard from "./StockCard"
import StockNews from "./StockNews"
import QuoteInfo from "./QuoteInfo"

import MetricCard from "./MetricCard"

import Navbar from "./Navbar";
import axios from "axios";
import { Button, Card, Image } from "semantic-ui-react";

class Results extends React.Component {
  state = {
    stockProfile: "",
    metricList:"",
    selectedStock: null,
    news:[],
    quote:""
  };


  onSearchSubmit = async (stock) => {
    await axios.get(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${stock}&${process.env.REACT_APP_API_KEY}`
    ).then( (res) => {
      this.setState({ stockProfile: res.data});
    });
  };

  onStockSelect = async (symbol) => {
    await Promise.all([
      axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${symbol.ticker}&${process.env.REACT_APP_API_KEY}`
      ),
      axios.get(
        `https://finnhub.io/api/v1/stock/metric?symbol=${symbol.ticker}&metric=all&${process.env.REACT_APP_API_KEY}`
      ),
      axios.get(
        `https://finnhub.io/api/v1/company-news?symbol=${symbol.ticker}&from=2020-04-30&to=2020-05-01&${process.env.REACT_APP_API_KEY}`

      ),
    ]).then(([res1, res2, res3]) => {
      console.log(res1.data);
      console.log(res2.data);
      console.log(res3.data);
      this.setState({quote:res1.data, selectedStock: res2.data.metric, news: res3.data.slice(0,6) });
    });
  };



  render() {
    return (
      <>
        <Navbar />
        <SearchBox onSubmit={this.onSearchSubmit} />
        <Stockcard stockProfile = {this.state.stockProfile} onStockSelect={this.onStockSelect} />
        <MetricCard selectedStock={this.state.selectedStock} onStockSelect={this.onStockSelect} />
        <StockNews news={this.state.news} onStockSelect={this.onStockSelect} />
        <QuoteInfo quote={this.state.quote} onStockSelect={this.onStockSelect} />
      </>
    );
  }
}

export default Results;
