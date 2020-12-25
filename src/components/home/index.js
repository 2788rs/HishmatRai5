import React from "react";
import { connect } from "react-redux";
class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <ul>
          <li>{this.props.data.name}</li>
          <li>{this.props.data.address}</li>
          <li>{this.props.data.url}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("=========> Contact", state);
  return {
    data: state,
  };
};
export default connect(mapStateToProps, null)(Contact);
