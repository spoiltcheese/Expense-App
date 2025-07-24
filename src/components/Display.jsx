import React from "react";
import Item from "./Item";

const Display = (props) => {
  const handleShow = (index) => {
    props.onShowItem(index);
  };

  const handleDelete = (index) => {
    props.onDeleteItem(index);
  };

  const testShow = (show) => {
    console.log(show);
  };

  return (
    <div className="container mt-4">
      {props.items.map((item, index) => (
        <Item
          key={index}
          {...item}
          onDelete={() => handleDelete(index)}
          onShow={() => handleShow(index)}
        />
      ))}
    </div>
  );
};

export default Display;
