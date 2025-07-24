import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

const Form = () => {
  const [items, setItems] = useState([{}]);

  const handleAddItem = () => {
    setItems([...items, {}]);
  };

  return (
    <div className="container mt-5">
      <Input label="Name" />
      <Input label="Price" />
      <Input label="Date" />
      <Button label="Submit" />
    </div>
  );
};

export default Form;
