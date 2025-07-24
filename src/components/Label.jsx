import React from "react";

const Label = (props) => {
  return (
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">
        {props.label}
      </span>
    </div>
  );
};

export default Label;
