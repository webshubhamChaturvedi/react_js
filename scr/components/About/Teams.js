import React from "react";
import { json } from "react-router-dom";
class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: {
        name: "Shubham",
        location: "default",
      },
    };
    // alert("Constarcture");
  }
  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/webshubhamChaturvedi"
    );
    const json = await data.json();
    this.setState({
      userdata: json,
    });
  }
  componentDidUpdate() {
    // alert("Update");
  }
  render() {
    // alert("render");
    // const { name, location, contactno } = this.props;

    const { name, location, contactno, avatar_url } = this.state?.userdata;
    return (
      <div className="userDetail">
        <h2>Name:{name}</h2>
        <h6>Location:{location}</h6>
        <h5>Contact:{contactno}</h5>
        <img src={avatar_url} alt={avatar_url} style={{ width: "100px" }}></img>
      </div>
    );
  }
}

export default Teams;
