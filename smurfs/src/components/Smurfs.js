import React from "react";

import Smurf from "./Smurf";

const Smurfs = props => {
  return (
    <div className="Smurfs">
      {props.smurfs.map(smurf => {
        return <Smurf key={smurf.name} smurf={smurf} />;
      })}
    </div>
  );
};

export default Smurfs;
