import React, { useState } from "react";

function ToDoForm(props) {
  const [item, setItem] = useState("");

  function submit(e) {
    const title = item;
    setItem("");
    props.addItem(e, title);
  }

  return (
    <form onSubmit={(e) => submit(e)}>
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
