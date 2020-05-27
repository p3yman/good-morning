import React from "react";

function ToDoListPart(props) {
  return (
    <ul className="todo-list">
      {props.items.map((item, i) => (
        <li key={`item-${item.date}-${i}`} className="item">
          <input
            type="checkbox"
            id={`item-${item.date}-${i}`}
            checked={item.done}
            onChange={() => props.toggleItem(item.date)}
          />
          <label htmlFor={`item-${item.date}-${i}`}>{item.title}</label>
        </li>
      ))}
    </ul>
  );
}

export default ToDoListPart;
