import React from "react";
import { Form, Input } from "semantic-ui-react";
// import Information from "./Stocks.json"

class SearchBox extends React.Component {
  state = {
    stock: "",
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.props.onChange(this.state.value);
    this.setState({ stock: event.target.value.toUpperCase() });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.stock);
    this.props.onChange(this.state.stock);
  };

  render() {
    return (
      <>
        <Form
          size="massive"
          autocomplete="off"
          onSearchChange={this.handleChange}
          placeholder="Enter ticker here"
          onSubmit={this.onFormSubmit}
          style={{ textTransform: "uppercase",textAlign: "center", marginTop: "30px" }}
        
        >
          <Input
            size="large"
            placeholder="Enter ticker here"
            type="text"
            icon="search"
            onSearchChange={this.handleChange}
            value={this.state.stock}
            style={{ textTransform: "uppercase" }}
            onChange={(e) => this.setState({ stock: e.target.value })}
          />
        </Form>
      </>
    );
  }
}

export default SearchBox;
