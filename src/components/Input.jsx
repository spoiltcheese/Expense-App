import React from "react";
import Label from "./Label";

const Input = (props) => {
  return (
    <div className="input-group mb-3">
      <Label label={props.label} />
      <input
        type="text"
        className="form-control"
        placeholder={props.label}
        aria-label={props.label}
        aria-describedby="basic-addon1"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
