
// ToDoItem.jsx
import React from "react";

function ToDoItem({ text, onDelete }) {
  return (
    <div className="todo-item">
      <li>
        {text}
        <button onClick={onDelete}>Delete</button>
      </li>
    </div>
  );
}

export default ToDoItem;
