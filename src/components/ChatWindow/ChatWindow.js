import React, { Component } from 'react'
import Bubble from '../Bubble'
import UserInput from '../UserInput'
import './ChatWindow.scss'
import * as service from '../../service/service'

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.msgs = React.createRef();
    this.state = { messages: [], loading: false };
  }

  componentDidMount() {
    this.fetchWelcome();
  }

  componentDidUpdate(){
    window.scrollTo(0,this.msgs.current.scrollHeight);
  }

  fetchWelcome() {
    service.getWelcomeMessage()
      .then(res => {
        if (res.error) {
          console.log(res.error);
        } else {
          this.setState( (state, props) => ({
            messages: state.messages.concat(res.map(r => ({...r, type: 'incoming'})))
          }));
        }
      });
  }

  fetchAnswer(text) {
    this.setState({ loading: true });
    service.getAnswer(text)
      .then(res => {
        if (res.error) {
          console.log(res.error);
        } else {
          this.setState( (state, props) => ({
            loading: false,
            messages: state.messages.concat(res.map(r => ({...r, type: 'incoming'})))
          }));
        }
      });
  }

  addMessage(text) {
    this.setState( (state, props) => ({
      messages: state.messages.concat([{text, type: 'outgoing'}])
    }));
    this.fetchAnswer(text);
  }

  render() {
    return (
      <div className="chat-window">
        <div className="messages-container" ref={this.msgs}>
          <div className="messages">
            {this.state.messages.map((message, i) => {
              const first = i === 0 || this.state.messages[i-1].type !== message.type;
              return <Bubble key={i} text={message.text} type={message.type}
                      first={first} typing={message.typing} />
            })}
            {this.state.loading && <Bubble key={-1} type="incoming"
                    first={true} typing={true} />}
          </div>
        </div>
        <UserInput addMessage={this.addMessage.bind(this)} />
      </div>
    );
  }
}

export default ChatWindow;
