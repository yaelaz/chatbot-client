import React, { Component } from 'react'

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  updateValue(e) {
    this.setState({ value: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addMessage(this.state.value, 'user');
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={e => this.handleClick(e)}>
        <input type="text" className="user-input-text"
        value={this.state.value} onChange={e => this.updateValue(e)}/>
        <button type="submit" className="user-input-button">Send</button>
      </form>
    );
  }
}

export default UserInput;
