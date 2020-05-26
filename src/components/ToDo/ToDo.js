import React, { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

function ToDo() {
  const defaultItems = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  console.log(defaultItems);
  const [items, setItems] = useState(defaultItems);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = (e, title) => {
    e.preventDefault();

    const newItems = [...items];
    newItems.push({
      title,
      done: false,
    });
    setItems(newItems);
  };

  return (
    <div className="todo">
      <ToDoForm addItem={addItem} />
      <ToDoList items={items} />
    </div>
  );
}

export default ToDo;
