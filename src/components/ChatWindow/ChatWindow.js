import React, { Component } from "react";
import * as chatbotService from "../../services/chatbot-service";

import Bubble from "../Bubble";
import UserInput from "../UserInput";
import AutoScrollContainer from "../AutoScrollContainer";

import "./ChatWindow.scss";

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], isTyping: false };
  }

  componentDidMount() {
    chatbotService.establishConnection(this.handleMessageFromBot.bind(this));
  }

  addMessage(text) {
    this.setState((state, props) => ({
      messages: state.messages.concat([{ text, type: "outgoing" }])
    }));

    chatbotService.emitMessageFromUser(text);
  }

  handleMessageFromBot(data) {
    if (data.isTyping) {
      this.setState({ isTyping: true });
    } else {
      this.setState((state, props) => ({
        isTyping: false,
        messages: state.messages.concat([{ ...data, type: "incoming" }])
      }));
    }
  }

  renderBubbles() {
    return this.state.messages.map((message, index, messages) => {
      let position = "middle";
      if (index === 0 || message.type !== messages[index - 1].type) {
        position = "first";
      } else if (
        index === messages.length - 1 ||
        message.type !== messages[index + 1].type
      ) {
        position = "last";
      }
      return (
        <Bubble
          key={index}
          text={message.text}
          type={message.type}
          position={position}
        />
      );
    });
  }

  renderTypingBubble() {
    const messages = this.state.messages;

    const isFirstPosition =
      messages.length === 0 ||
      messages[messages.length - 1].type !== "incoming";

    return (
      this.state.isTyping && (
        <Bubble
          type="incoming"
          isTyping={true}
          position={isFirstPosition ? "first" : "last"}
        />
      )
    );
  }

  render() {
    return (
      <div className="chat-window">
        <AutoScrollContainer>
          <div className="messages">
            {this.renderBubbles()}
            {this.renderTypingBubble()}
          </div>
        </AutoScrollContainer>
        <div className="footer">
          <UserInput addMessage={this.addMessage.bind(this)} />
        </div>
      </div>
    );
  }
}

export default ChatWindow;
