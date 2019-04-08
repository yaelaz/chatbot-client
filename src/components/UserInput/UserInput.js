import React, { Component } from "react";
import PropTypes from "prop-types";

import "./UserInput.scss";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = { value: "" };
  }

  updateValue(e) {
    this.setState({ value: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addMessage(this.state.value);
    this.setState({ value: "" });
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div className="user-input">
        <form onSubmit={e => this.handleClick(e)}>
          <input
            type="text"
            className="input-text form-control"
            ref={this.textInput}
            value={this.state.value}
            onChange={e => this.updateValue(e)}
          />
          <button
            type="submit"
            className="submit-button"
            disabled={!this.state.value.trim()}
          >
            <img src="submit_icon.png" alt="submit" height="30" />
          </button>
        </form>
      </div>
    );
  }
}

UserInput.propTypes = {
  addMessage: PropTypes.func.isRequired
};

export default UserInput;
