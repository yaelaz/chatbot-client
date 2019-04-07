import React, { Component } from 'react'
import './UserInput.scss'

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
    this.props.addMessage(this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <div className="user-input">
        <form onSubmit={e => this.handleClick(e)}>
          <input type="text" className="input-text"
          value={this.state.value} onChange={e => this.updateValue(e)}/>
          <button type="submit" className="submit-button" disabled={!this.state.value.trim()}>
            <img src="submit_icon.png" alt="submit" height="30" />
          </button>
        </form>
      </div>
    );
  }
}

export default UserInput;
