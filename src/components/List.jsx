import React from "react";
import "../style/List.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function List({ todoData, setTodoData }) {
    const handleDragEnd = (result) => {
        if (!result.destination) return;
    
        const newTodoData = Array.from(todoData);
        const [reorderedItem] = newTodoData.splice(result.source.index, 1);
        newTodoData.splice(result.destination.index, 0, reorderedItem);
    
        setTodoData(newTodoData);
      };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log("new", newTodoData);
    setTodoData(newTodoData);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided,snapshot) => (
                    <div className="memoBlock" key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                      {data.title}
                      <button onClick={() => handleClick(data.id)}>x</button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
