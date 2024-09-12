import React, { useState } from "react";

export default function Memo({
  id,
  title,
  todoData,
  setTodoData,
  provided,
}) {
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log("new", newTodoData);
    setTodoData(newTodoData);
  };

  const handleEditChange = (event) => {
    setEdited(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.title = edited;
      }
      return data;
    });
    setTodoData(newTodoData);
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [edited, setEdited] = useState(title);

  if (isEditing) {
    return (
      <div>
        <div className="memoBlock">
          <form onSubmit={handleSubmit}>
            <input value={edited} onChange={handleEditChange} />
            <button type="submit">save</button>
            <button onClick={(handleSubmit) => setIsEditing(false)}>x</button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div
          className="memoBlock"
          key={id}
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          {title}
          <button onClick={() => setIsEditing(true)}>edit</button>
          <button onClick={() => handleClick(id)}>x</button>
        </div>
      </div>
    );
  }
}
