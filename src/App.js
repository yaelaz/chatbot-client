import React, { Component } from 'react';
import ChatWindow from './components/ChatWindow';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatWindow />
      </div>
    );
  }
}

export default App;
