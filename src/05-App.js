import React, { Component } from "react";
class Appp extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  state = {
    count: 0,
  };
  add = () => {
    console.log("add count");
    this.setState(current => ({ count: this.state.count + 1 }));
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    return (
      <div>
        <h1>hello!</h1>
        <h1>the number is: {this.state.count}</h1>
        <button onClick={this.add}>add</button>
      </div>
    );
  }
}

export default Appp;
