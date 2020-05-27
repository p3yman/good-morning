import React from "react";

function ToDoList(props) {
  return (
    <div>
      {props.items.length ? (
        <ul className="todo-list">
          {props.items.map((item, i) => (
            <li key={`item-${i}`} className="item">
              <input
                type="checkbox"
                id={`item-${i}`}
                checked={item.done}
                onChange={() => props.toggleItem(i)}
              />
              <label htmlFor={`item-${i}`}>{item.title}</label>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">No items has been added yet</div>
      )}
    </div>
  );
}

export default ToDoList;
