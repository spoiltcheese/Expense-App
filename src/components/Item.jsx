import React from "react";
import Button from "./Button";

const Item = (props) => {
  return (
    <div className="row mb-2">
      <div className="col">
        <strong>{props.name}</strong>
      </div>
      <div className="col">Price: {props.price}</div>
      <div className="col">Date: {props.date}</div>
      <div className="col">
        <Button
          label="Update"
          className="btn-warning"
          onClick={() => props.onShow(props.index)}
        />
      </div>
      <div className="col">
        <Button
          label="Delete"
          className="btn-danger"
          onClick={props.onDelete}
        />
      </div>
    </div>
  );
};

export default Item;
