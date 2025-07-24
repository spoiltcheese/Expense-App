import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
  return (
    <div className="container mt-5">
      <Input label="Name" />
      <Input label="Price" />
      <Input label="Date" />
      <Button />
    </div>
  );
};

export default Form;
