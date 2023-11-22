import React, { useState, useRef, Component } from "react";
import Teams from "./Teams";

class About extends Component {
  constructor() {
    super();
  }
  componentDidMount() {}
  render() {
    return (
      <>
        <Teams name="Shubham" contactno="9807099210" location="Delhi" />
      </>
    );
  }
}

// const About = () => {

//   return (
//     <>
//       <Teams name="Shubham" contactno="9807099210" location="Delhi" />
//     </>
//   );
// };

export default About;
