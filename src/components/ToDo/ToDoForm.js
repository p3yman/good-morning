import React, { useState } from "react";

function ToDoForm(props) {
  const [item, setItem] = useState("");

  return (
    <form onSubmit={(e) => props.addItem(e, item)}>
      <input
        type="text"
        id="item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="What do you want to do today?"
      />
    </form>
  );
}

export default ToDoForm;
