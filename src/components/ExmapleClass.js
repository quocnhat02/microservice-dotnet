import React, { Component } from "react";

export default class ExampleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Test",
      age: 12,
    };
  }

  handleClick = () => {
    this.setState({ name: "updated" });
  };

  render() {
    return (
      <div>
        <pre>Class Component</pre>
        <p>{JSON.stringify(this.state)}</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
