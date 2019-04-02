import React, { Component } from 'react'
import Bubble from './Bubble'
import UserInput from './UserInput'

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentDidMount() {
    this.fetchWelcome();
  }

  fetchWelcome() {
    fetch('/welcome')
      .then(data => data.json())
      .then(res => {
        if (res.error) {
          console.log(res.error);
        } else {
          this.setState( (state, props) => ({
            messages: state.messages.concat(res)
          }));
        }
      });
  }

  fetchAnswer(text) {
    fetch(`/answer/${text}`)
      .then(data => data.json())
      .then(res => {
        if (res.error) {
          console.log(res.error);
        } else {
          this.setState( (state, props) => ({
            messages: state.messages.concat(res)
          }));
        }
      });
  }

  addMessage(text, type) {
    this.setState( (state, props) => ({
      messages: state.messages.concat([{text, type}])
    }));
    this.fetchAnswer(text);
  }

  render() {
    return (
      <div className="ChatWindow">
        {this.state.messages.map((message, index) =>
          <Bubble key={index} text={message.text} type={message.type} />
        )}
        <UserInput addMessage={this.addMessage.bind(this)} />
      </div>
    );
  }
}

export default ChatWindow;
