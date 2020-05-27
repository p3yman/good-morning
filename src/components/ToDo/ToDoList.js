import React from "react";
import { isToday, isYesterday } from "../../utils";

function ToDoList(props) {
  const todayList = props.items.filter((item) => isToday(item.date));
  const yesterdayList = props.items.filter((item) => isYesterday(item.date));

  return (
    <div className="todo-list-wrapper">
      {yesterdayList.length ? (
        <div className="day">
          <div className="title">Yesterday</div>
          <ul className="todo-list">
            {yesterdayList.map((item, i) => (
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
        </div>
      ) : null}
      {todayList.length ? (
        <div className="day">
          <div className="title">Today</div>
          <ul className="todo-list">
            {todayList.map((item, i) => (
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
        </div>
      ) : null}
      {}
    </div>
  );
}

export default ToDoList;
