import React from "react";
import { isToday, isYesterday } from "../../utils";
import ToDoListPart from "./ToDoListPart";

function ToDoList(props) {
  const todayList = props.items.filter((item) => isToday(item.date));
  const yesterdayList = props.items.filter((item) => isYesterday(item.date));

  return (
    <div className="todo-list-wrapper">
      {yesterdayList.length ? (
        <div className="day">
          <div className="title">Yesterday</div>
          <ToDoListPart items={yesterdayList} toggleItem={props.toggleItem} />
        </div>
      ) : null}
      {todayList.length ? (
        <div className="day">
          <div className="title">Today</div>
          <ToDoListPart items={todayList} toggleItem={props.toggleItem} />
        </div>
      ) : null}
      {}
    </div>
  );
}

export default ToDoList;
