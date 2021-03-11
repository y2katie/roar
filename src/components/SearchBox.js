import React from "react";
import {
  Form,
  Input,
} from "semantic-ui-react";


class SearchBox extends React.Component {

  state = {
    stock: ""
  };

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
          autocomplete="off"
          onSubmit={this.onFormSubmit}
              style={{textTransform:"uppercase"}}
          style={{ textAlign: "center", marginTop: "30px" }}
        >
          <Input
            size='large'
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
