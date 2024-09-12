import React from "react";
import "../style/List.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Memo from "./Memo";

export default function List({ todoData, setTodoData }) {
    const handleDragEnd = (result) => {
        if (!result.destination) return;
    
        const newTodoData = Array.from(todoData);
        const [reorderedItem] = newTodoData.splice(result.source.index, 1);
        newTodoData.splice(result.destination.index, 0, reorderedItem);
    
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
                    <Memo 
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        todoData={todoData}
                        setTodoData={setTodoData}
                        provided={provided}
                        snapshot={snapshot}
                    />
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
