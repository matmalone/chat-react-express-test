import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ChatHistory extends Component
{
  render()
  {
    const history = this.props.history;
    const messages = history.map((k, v) => {
      // return ()
    });

    return (        
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
    );
  }
}

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      history: [
        {
          username: 'username',
          message: 'some message text',
        },
        {
          username: 'username2',
          message: 'some message text2',
        },
      ],
    };
  }

  render() {
    const history = this.state.history;
    return (
      <div className="chat-container">
        <h1>My Chat</h1>
        <ChatHistory
          history={history}
        />
        <div className="chat-input-container">
          <input type="text" id="chat-input" />
          <button id="send">Send</button>
        </div>
      </div>
    );
  }
}

export default App;
