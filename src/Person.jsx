import React, { Component } from "react";

export default class Person extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      fullName: "OLFA KOUKI",
      bio: "good person loves coding",
      imgsrc:
        "https://www.analyticsinsight.net/wp-content/uploads/2021/11/Top-women-programmers.jpg",
      profession: "SOFT DEVELOPER",
    };
    this.handlecounter = () => {
      this.setState({ counter: this.state.counter + 1 });
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.handlecounter();
    }, 1000);
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.fullName}</h1>
        <img src={this.state.imgsrc} alt="" width="150px" height="140px" />
        <h2>{this.state.bio}</h2>
        <h2>{this.state.profession}</h2>
        <h3>{this.state.counter} secondes</h3>
      </div>
    );
  }
}
