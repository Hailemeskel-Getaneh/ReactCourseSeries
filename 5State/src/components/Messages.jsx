import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hi there, Welcome to Hamar.com",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-2xl text-yellow-600">{this.state.message}</h1>
        <button
          onClick={() => this.changeMessage()}
          className="text-white text-3xl p-2 rounded bg-blue-500 mt-4 hover:text-black"
        >
          Subscribe
        </button>+
      </div>
    );
  }
}

export default Message;
