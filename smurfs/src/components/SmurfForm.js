import React from "react";
import { connect } from "react-redux";

import { postSmurf } from "../actions";

class SmurfForm extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "",
  //     age: "",
  //     height: ""
  //   };
  // }

  //   addSmurf = event => {
  //     event.preventDefault();
  //     // add code to create the smurf using the api
  //     this.props.postSmurf(this.state);
  //     this.setState({
  //       name: "",
  //       age: "",
  //       height: ""
  //     });
  //   };

  addSmurf = e => {
    e.preventDefault();
    this.props.postSmurf(this.props.smurfs);
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.props.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.props.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.props.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    age: state.age,
    name: state.name,
    height: state.height
  };
};

export default connect(
  mapStateToProps,
  { postSmurf }
)(SmurfForm);
