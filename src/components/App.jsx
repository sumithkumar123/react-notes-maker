



// App.jsx
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleClick() {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }

  function handleDelete(index) {
    setItems((prevValue) => {
      const newItems = [...prevValue];
      newItems.splice(index, 1);
      return newItems;
    });
  }

  return (
       <div className="container">
      <div className="heading">
        <h1>Notes Maker</h1>
      </div>
      <div className="form">
        <input onChange={handleChange}
        type="text"  value={inputText}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem, index) => (
            <ToDoItem
              key={index}
              text={todoitem}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
