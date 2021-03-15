import React from "react";
import { Search } from "semantic-ui-react";
import _ from "lodash";
import axios from "axios"

const data = [
  {
      "currency": "USD",
      "description": "PURPLE BIOTECH LTD",
      "displaySymbol": "KITVF",
      "figi": "BBG00WHNVX76",
      "mic": "OOTC",
      "symbol": "KITVF",
      "type": "Common Stock"
  },
  {
      "currency": "USD",
      "description": "ENERGY TODAY INC",
      "displaySymbol": "NRGT",
      "figi": "BBG001M6QN28",
      "mic": "OOTC",
      "symbol": "NRGT",
      "type": "Common Stock"
  },
  {
      "currency": "USD",
      "description": "katie",
      "displaySymbol": "KITVF",
      "figi": "BBG00WHNVX76",
      "mic": "OOTC",
      "symbol": "KITVF",
      "type": "Common Stock"
  },
  {
      "currency": "USD",
      "description": "teddy",
      "displaySymbol": "NRGT",
      "figi": "BBG001M6QN28",
      "mic": "OOTC",
      "symbol": "NRGT",
      "type": "Common Stock"
  }
]

class Bigsearch extends React.Component {
    state = {
        isLoading: false,
        results: [],
        value: ""
    };

  //   componentDidMount(){
  //   axios.get("https://api.polygon.io/v2/reference/tickers?sort=ticker&perpage=20&page=1&apiKey=au8pOjJCLvrBympfliXpDm0THEiIY9r5")
  //   .then( (response) => {
  //   let help = response.data.tickers.map( (tet) => {
  //     return <p> {tet.ticker} </p>
  //   })
  //     this.setState({results:help})
  //   })
  // }

    resetComponent = () =>
        this.setState({ isLoading: false, results: [], value: "" });

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value });

        setTimeout(() => {
            if (this.state.value.length < 1) this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), "i");
            const isMatch = result => re.test(result.displaySymbol);

            this.setState({
                isLoading: false,
                results: _.filter(data, isMatch)
            });
        }, 500);
    };

    handleResultSelect = (e, { result }) =>
        this.setState({ value: result.displaySymbol });

    render() {
        const { isLoading, results, value } = this.state;
        return (
            <div>
                <Search
                    type="text"
                    size="big"
                    loading={isLoading}
                    results={results}
                    value={value}
                    onSearchChange={this.handleSearchChange}
                    onResultSelect={this.handleResultSelect}
                />
            </div>
        );
    }
}

export default Bigsearch;
