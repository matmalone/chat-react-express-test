import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="chat-container">
        <h1>My Chat</h1>
        <table className="chat-history">
          <tr>
            <td className="chat-history-username">username</td>
            <td className="chat-history-text">some history text</td>
          </tr>
          <tr>
            <td className="chat-history-username">username2</td>
            <td className="chat-history-text">some history text  2</td>
          </tr>
        </table>
        <div className="chat-input-container">
          <input type="text" id="chat-input" />
          <button id="send">Send</button>
        </div>
      </div>
    );
  }
}

export default App;
