import React from "react";
import {
  Form,
  Input,
} from "semantic-ui-react";
import axios from "axios"
// import Information from "./Stocks.json"



class SearchBox extends React.Component {

  state = {
    stock: ""
    };

    componentDidMount(e){
      axios.get('https://morning-star.p.rapidapi.com/market/v2/auto-complete', {
        params: {q:"tesla"},
        headers: {
            'x-rapidapi-key': `${process.env.REACT_APP_MORNING_STAR}`,
            'x-rapidapi-host': 'morning-star.p.rapidapi.com'
          }
        })
        .then( (response) => {
        console.log(response);

        })
    }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ stock: event.target.value.toUpperCase() });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.stock);
  };

  render() {


    return (
      <>

        <Form
        size="massive"
          autocomplete="off"
          placeholder="Enter ticker here"
          onSubmit={this.onFormSubmit}
              style={{textTransform:"uppercase"}}
          style={{ textAlign: "center", marginTop: "30px" }}
        >

          <Input
            size='large'
            placeholder="Enter ticker here"
            type="text"
            icon='search'
            onSearchChange={this.handleChange}
            value={this.state.stock}
            style={{textTransform:"uppercase"}}
            onChange={(e) => this.setState({ stock: e.target.value })}
          />

        </Form>
      </>
    );
  }
}

export default SearchBox;
