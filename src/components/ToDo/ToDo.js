import React, { useState, useEffect } from "react";
import { isToday, isYesterday } from "../../utils";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

function isValid(item) {
  return isToday(item.date) || (isYesterday(item.date) && !item.done);
}

function ToDo() {
  let defaultItems = JSON.parse(localStorage.getItem("items") || "[]");
  defaultItems = defaultItems.filter((item) => isValid(item));
  const [items, setItems] = useState(defaultItems);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  /**
   * Add new item to todo list
   *
   * @param {event} e
   * @param {string} title
   */
  const addItem = (title) => {
    const newItems = [...items];
    newItems.push({
      title,
      done: false,
      date: Date.now(),
    });
    setItems(newItems);
  };

  /**
   * Toggle status of todo list item
   * @param {number} date
   */
  const toggleItem = (date) => {
    const newItems = [...items];
    const i = newItems.findIndex((item) => item.date === date);
    newItems[i].done = !newItems[i].done;
    setItems(newItems);
  };

  return (
    <div className="todo">
      <ToDoForm addItem={addItem} />
      <ToDoList items={items} toggleItem={toggleItem} />
    </div>
  );
}

export default ToDo;
