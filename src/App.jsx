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
    console.log(itemToShow[0]);
  };

  const onEditItem = (editedItem) => {
    const updatedItems = items.map((item, index) =>
      index === items.indexOf(shownItem) ? editedItem : item
    );
    setItems(updatedItems);
    setShownItem(null);
  };

  return (
    <>
      <Form
        onAddItem={onAddItem}
        onShowItem={onShowItem}
        onEditItem={onEditItem}
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
