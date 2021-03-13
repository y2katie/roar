import React from "react";
import SearchBox from "./SearchBox";
import Stockcard from "./StockCard";
import StockNews from "./StockNews";
import Test from "./Test";
import Peers from "./Peers";

import Statistic from "./Statistic";
import DividerExampleHorizontalTable from "./Divider"

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
    prices:[]
  };

  handleLoadingClick = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 7000);
  };

  // componentDidMount() {
  //     axios.get(
  //       "http://api.marketstack.com/v1/tickers?access_key=184f7ceece4bd92b84e52fbc29614190"
  //     )
  //     .then( (res)  => {
  //     let names = res.data.data;
  //     this.setState({ stockNames:names.slice(0,1) });
  //   });
  //
  //   if(this.state.stockNames === null) {
  //     return null
  //
  //   }
  //
  //   else {
  //     axios.get(
  //       "http://api.marketstack.com/v1/eod?access_key=184f7ceece4bd92b84e52fbc29614190&symbols=" + this.state.stockNames
  //     )
  //     .then( (response) => {
  //       console.log(response.data)
  //       this.setState({prices: response.data})
  //     })
  //   }
  // }

  // async componentDidMount(){
  //   const resp1 = await axios.get("http://api.marketstack.com/v1/tickers?access_key=184f7ceece4bd92b84e52fbc29614190")
  //   const names = resp1.data.data.slice(0,1)
  //
  //   if(!names) return;
  //
  //   this.setState({stockNames: names[0].name})
  //
  //   const res2 = axios.get(`http://api.marketstack.com/v1/eod?access_key=184f7ceece4bd92b84e52fbc29614190&symbols=aapl`)
  //     console.log(res2.data)
  //     this.setState({prices:res2})
  // }

  onStockSelect = async (stock, symbol) => {
    console.log(stock);
    await Promise.all([
      axios.get(
        `https://finnhub.io/api/v1/stock/profile2?symbol=${stock}&${process.env.REACT_APP_API_KEY}`
      ),
      axios.get(
        `https://finnhub.io/api/v1/stock/recommendation?symbol=${stock}&${process.env.REACT_APP_API_KEY}`
      ),
      axios.get(
        `https://finnhub.io/api/v1/stock/metric?symbol=${stock}&metric=all&${process.env.REACT_APP_API_KEY}`
      ),
      axios.get(
        `https://finnhub.io/api/v1/company-news?symbol=${stock}&from=2020-04-30&to=2020-05-01&${process.env.REACT_APP_API_KEY}`
      ),
      axios.get(
        `https://finnhub.io/api/v1/stock/peers?symbol=${stock}&${process.env.REACT_APP_API_KEY}`
      ),
    ]).then(([res, res1, res2, res3, res4]) => {
      console.log(res.data);
      console.log(res1.data);
      console.log(res2.data);
      console.log(res3.data);
      console.log(res4.data);
      this.setState({
        stockProfile: res.data,
        trends: res1.data.slice(0, 1),
        selectedStock: res2.data.metric,
        news: res3.data.slice(0, 6),
        peers: res4.data,
      });
    });
  };

  render() {
    const { loading } = this.state;

    return (
      <>
        <Navbar />
        <SearchBox
          onSubmit={this.onStockSelect}
          loading={loading}
          onClick={this.handleLoadingClick}
        />
      <Statistic />
            <Peers peers={this.state.peers} />
      <DividerExampleHorizontalTable />
        <Stockcard
          stockProfile={this.state.stockProfile}
          trends={this.state.trends}
          peers={this.state.peers}
          onStockSelect={this.onStockSelect}
        />

        <MetricCard
          selectedStock={this.state.selectedStock}
          onStockSelect={this.onStockSelect}
        />

        <StockNews news={this.state.news} onStockSelect={this.onStockSelect} />
      </>
    );
  }
}

export default Results;
