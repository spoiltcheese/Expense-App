import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  return (
    <Form>
      <Input label="Name" />
      <Input label="Price" />
      <Input label="Date" />
      <Button label="Submit" />
    </Form>
  );
}

export default App;
