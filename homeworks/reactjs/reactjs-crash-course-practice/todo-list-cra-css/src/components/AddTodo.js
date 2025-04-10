import React, { Component } from "react";
import PropTypes from "prop-types";

export default class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          placeholder="Add Todo..."
          style={{ flex: 10, padding: 5 }}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: 1 }}
        />
      </form>
    );
  }
}

// propTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
