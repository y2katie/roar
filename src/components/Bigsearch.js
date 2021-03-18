import React from "react";
import { Search, Form,Dropdown,Grid, Header} from "semantic-ui-react";
import _ from "lodash";
import faker from 'faker'
import axios from "axios"
import PropTypes from 'prop-types'




class Bigsearch extends React.Component {
    state = {
        isLoading: false,
        results: [],
        value: "",
        data:[]
    };

  

    componentDidMount() {
        axios.get(`https://finnhub.io/api/v1/stock/symbol?currency=USD&${
          process.env.REACT_APP_API_KEY
        }&exchange=US&securityType=Common Stock`)
        .then( (response) => {
          this.setState({data:response.data})
          console.log(response.data);
        })
      }


    resetComponent = () =>
        this.setState({ isLoading: false, results: [], value: "",data:[] });

    handleSearchChange = (e, { value }) => {
      console.log(value);
        this.setState({ isLoading: true, value });

        setTimeout(() => {
            if (this.state.value.length < 1) this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), "i");
            const isMatch = result => re.test(result.description);

            this.setState({
                isLoading: false,
                results: _.filter(this.state.data, isMatch)
            });
        }, []);
    };

    handleResultSelect = (e, { result }) => {
        this.setState({ value: result.displaySymbol });
        console.log(result.displaySymbol);
        this.props.onResultSelect(this.state.value)
      }

    resultRenderer = ({description, displaySymbol}) => {
         return (
             <div>
                 <p>{description} <br /> {displaySymbol} </p>
             </div>
         );
      }


    render() {
        const { isLoading, results, value, data } = this.state;

        return (
            <div>

                <Search
                    type="text"
                    size="big"
                    loading={isLoading}
                    results={results}
                    title={data}
                    placeholder= {this.state.data.length ? "lets search" : "loading..."}
                    value={value}
                    resultRenderer={this.resultRenderer}
                    onSearchChange={this.handleSearchChange}
                    onResultSelect={this.handleResultSelect}
                />

            </div>
        );
    }
}

export default Bigsearch;
//
//
// class Bigsearch extends React.Component {
//     state = {
//         isLoading: false,
//         results: [],
//         value: "",
//         data:[]
//     };
//
//     componentDidMount() {
//         axios.get("https://api.polygon.io/v2/reference/tickers?sort=ticker&type=cs&market=STOCKS&locale=us&perpage=50&page=1&active=true&apiKey=au8pOjJCLvrBympfliXpDm0THEiIY9r5")
//         .then( (response) => {
//           this.setState({data:response.data.tickers})
//           console.log(response.data.tickers);
//         })
//       }
//
//
//     resetComponent = () =>
//         this.setState({ isLoading: false, results: [], value: "",data:[] });
//
//     handleSearchChange = (e, { value }) => {
//       console.log(value);
//         this.setState({ isLoading: true, value });
//
//         setTimeout(() => {
//             if (this.state.value.length < 1) this.resetComponent();
//
//             const re = new RegExp(_.escapeRegExp(this.state.value), "i");
//             const isMatch = result => re.test(result.ticker);
//
//             this.setState({
//                 isLoading: false,
//                 results: _.filter(this.state.data, isMatch)
//             });
//         }, 500);
//     };
//
//     handleResultSelect = (e, { result }) => {
//         this.setState({ value: result.ticker });
//         console.log(result.ticker);
//       }
//
//     resultRenderer = ({ticker,name}) => {
//          return (
//              <div>
//                  <p>{ticker} <br /> {name}</p>
//              </div>
//          );
//       }
//
//
//
//     render() {
//         const { isLoading, results, value, data } = this.state;
//
//
//         return (
//             <div>
//
//                 <Search
//                     type="text"
//                     size="big"
//                     loading={isLoading}
//                     results={results}
//                     title={data}
//                     value={value}
//                     resultRenderer={this.resultRenderer}
//                     onSearchChange={this.handleSearchChange}
//                     onResultSelect={this.handleResultSelect}
//                 />
//                 {this.state.data.length}
//
//             </div>
//         );
//     }
// }
//
// export default Bigsearch;
