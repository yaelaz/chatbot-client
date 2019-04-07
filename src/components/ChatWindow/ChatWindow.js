import React, { Component } from 'react'
import * as chatbotService from '../../services/chatbot-service'

import Bubble from '../Bubble'
import UserInput from '../UserInput'
import AutoScrollContainer from '../AutoScrollContainer'

import './ChatWindow.scss'

//todo: get rid of the 68px padding in the scss
class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], typing: false };
  }

  componentDidMount() {
    chatbotService.establishConnection(this.handleMessageFromBot.bind(this));
  }

  addMessage(text) {
    this.setState( (state, props) => ({
      messages: state.messages.concat([{text, type: 'outgoing'}])
    }));

    chatbotService.emitMessageFromUser(text);
  }

  handleMessageFromBot(data) {
    if (data.typing) {
      this.setState({ typing: true });
    } else {
      this.setState( (state, props) => ({
        typing: false,
        messages: state.messages.concat([{...data, type: 'incoming'}])
      }));
    }
  }

  renderedMessages() {
    return this.state.messages.map((message, index, messages) => {
      let position = 'middle';
      if (index === 0 || message.type !== messages[index-1].type) {
        position = 'first';
      } else if (index === messages.length-1 || message.type !== messages[index+1].type) {
        position = 'last';
      }
      return <Bubble key={index} text={message.text} type={message.type}
              position={position} />
    });
  }

  render() {
    return (
      <div className="chat-window">
        <AutoScrollContainer>
          <div className="messages">
            {this.renderedMessages()}
            {this.state.typing && <Bubble key={-1} type="incoming" isTyping={true}
            position={(this.state.messages.length === 0 ||
              this.state.messages[this.state.messages.length-1] != 'incoming') ? 'first' : ''} />}
          </div>
        </AutoScrollContainer>
        <UserInput addMessage={this.addMessage.bind(this)} />
      </div>
    );
  }
}

export default ChatWindow;
