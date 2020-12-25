import React from "react";
import { connect } from "react-redux";
class About extends React.Component {
  render() {
    console.log(this.props.data.name);
    return (
      <div>
        <h1>About</h1>
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
  console.log("=========>About", state);
  return {
    data: state,
  };
};
export default connect(mapStateToProps, null)(About);
