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
      history: [],
      message: "",
    };
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  componentDidMount() {
    this.pullState();
  }

  pullState()
  {
    fetch('http://localhost:3001/recv')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      this.setState({history: data});
    });
    setTimeout((() => {
      this.pullState();
    }), 3000);
  }

  pushMessage()
  {
    const message = this.state.message;
    const url = 'http://localhost:3001/send';
    // The data we are going to send in our request
    let data = {
      username: 'mmalone',
      message: message,
    }
 
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(res => console.log(res));
    this.setState({
      message: '',
    });
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
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
          <input type="text" id="chat-input" 
            value={this.state.message}
            onChange={this.handleMessageChange}
          />
          <button id="send" onClick={() => {this.pushMessage()} }>Send</button>
        </div>
      </div>
    );
  }
}

export default App;
