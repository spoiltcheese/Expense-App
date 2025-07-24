import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddItem({ name, price, date });
    setName("");
    setPrice("");
    setDate("");
  };

  const doShowItem = (e) => {
    setName(props.shownItem.name);
    setPrice(props.shownItem.price);
    setDate(props.shownItem.date);

    console.log("Item to show:", props.item);
  };

  return (
    <div className="container mt-5">
      <Input
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Input
        label="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Button label="Commit Changes" className="btn-warning" />
      <Button label="Submit" onClick={handleSubmit} className="btn-primary" />
    </div>
  );
};

export default Form;
