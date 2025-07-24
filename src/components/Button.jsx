import React from "react";

const Button = (props) => {
  return (
    <div>
      {JSON.stringify(props.onClick)}
      <button className={"btn " + props.className} onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
};

export default Button;
