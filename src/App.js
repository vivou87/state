import "./App.css";
import React, { Component } from "react";
import Person from "./Person";
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };
    this.handleshow = () => {
      this.setState({ show: !this.state.show });
    };
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleshow}> show </button>
        {this.state.show ? <Person /> : <h1>click the button </h1>}
      </div>
    );
  }
}
