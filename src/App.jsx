import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Form from "./components/Form";
import { useState } from "react";
import Display from "./components/Display";

function App() {
  const [items, setItems] = useState([]);
  const [shownItem, setShownItem] = useState();

  const onAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const onDeleteItem = (index) => {
    const updatedItems = items.filter((items, i) => i !== index);
    setItems(updatedItems);
  };

  const onShowItem = (index) => {
    const itemToShow = items.filter((items, i) => i === index);
    setShownItem(itemToShow[0]);
    console.log("Item to show:", itemToShow[0]);
  };

  return (
    <>
      <Form
        onAddItem={onAddItem}
        onShowItem={onShowItem}
        shownItem={shownItem}
      />
      <Display
        items={items}
        onDeleteItem={onDeleteItem}
        onShowItem={onShowItem}
      />
    </>
  );
}

export default App;
