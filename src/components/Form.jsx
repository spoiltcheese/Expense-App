import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useState, useEffect } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setName(props.shownItem?.name || "");
    setPrice(props.shownItem?.price || "");
    setDate(props.shownItem?.date || "");
  }, [props.shownItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddItem({ name, price, date });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    props.onEditItem({ name, price, date });
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
      <Button
        label="Commit Changes"
        onClick={handleEdit}
        className="btn-warning"
      />
      <Button label="Submit" onClick={handleSubmit} className="btn-primary" />
    </div>
  );
};

export default Form;
