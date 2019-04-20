import React from "react";

const Smurf = props => {
  return (
    <div className="smurf">
      NAME: {props.smurf.name}
      AGE: {props.smurf.age}
      HEIGHT: {props.smurf.height}
    </div>
  );
};

export default Smurf;
