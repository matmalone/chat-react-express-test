import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class ChatHistory extends Component
{
  render()
  {
    if (this.props.history && this.props.history.length > 0)
      return this.buildPopulatedHistory();
    else
      return <div>No chat conversation yet</div>;
  }

  buildPopulatedHistory()
  {
    // const history = this.props.history;
    const messages = this.props.history.map((envelope, k) => {
      return (
        <tr key={envelope.key}>
          <td className="chat-history-username">{envelope.username}</td>
          <td className="chat-history-text">{envelope.message}</td>
        </tr>
        )
    });

    return (        
      <table className="chat-history">
        <tbody>
          {messages}
        </tbody>
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
          key: 1,
          username: 'username',
          message: 'some message text',
        },
        {
          key: 2,
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
