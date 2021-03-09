import React from "react";
import {
  Button,
  Card,
  Grid,
  Container,
  TextArea,
  Form,
  Search,
} from "semantic-ui-react";
class SearchBox extends React.Component {

  state = {
    stock: "",
  };

  handleChange = (event) => {
    console.log(event.target.value);

    this.setState({ stock: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.stock);
  };

  render() {
    return (
      <>
        <Form
          autocomplete="off"
          onSubmit={this.onFormSubmit}
              style={{textTransform:"uppercase"}}
          style={{ textAlign: "center", marginTop: "30px" }}
        >
          <Search
            type="text"
            onSearchChange={this.handleChange}
            value={this.state.stock}
            style={{textTransform:"uppercase"}}
            onChange={(e) => this.setState({ stock: e.target.value })}
          />
          <TextArea
            type="text"
            input="Submit"
            size="large"
            style={{textTransform:"uppercase"}}
            placeholder="AAPL"
            value={this.state.stock}
            onChange={(e) => this.setState({ stock: e.target.value })}
            label="Getting rich?"
            variant="outlined"
          />
        </Form>
      </>
    );
  }
}

export default SearchBox;
