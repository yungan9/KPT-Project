import React from "react";

export default function Memo({id, title, todoData, setTodoData, provided, snapshot}) {
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log("new", newTodoData);
    setTodoData(newTodoData);
  };
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
        <button onClick={() => handleClick(id)}>x</button>
      </div>
    </div>
  );
}
