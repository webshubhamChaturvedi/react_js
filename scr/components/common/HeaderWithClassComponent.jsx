import React, { Component } from "react";

export default class Headerwith extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    // alert("constructor");
  }

  componentDidMount() {
    // alert("Component did mount");
  }

  componentDidUpdate() {
    alert("didupdate");
  }

  componentWillUnmount() {
    alert("UNmount");
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  handleButtonClickDesc = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };
  render() {
    alert("Render");
    const { count } = this.state;

    return (
      <div style={{ marginBottom: "30px" }}>
        <h2>testing of Class Based Component</h2>
        {count}
        <button onClick={this.handleButtonClick} style={{ margin: "20px" }}>
          Count Increase
        </button>
        <button onClick={this.handleButtonClickDesc}>Count Dec</button>
        {/* <Icon></Icon> */}
      </div>
    );
  }
}
