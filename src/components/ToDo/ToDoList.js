import React from "react";

function ToDoList(props) {
  return (
    <div>
      {props.items.length ? (
        <ul className="todo-list">
          {props.items.map((item) => (
            <li>
              <input type="checkbox" checked={item.done} />
              <span>{item.title}</span>
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
