import React, { useState } from "react";
import List from "../components/List";
import Form from "../components/Form";

export default function Section({part}) {
  const [todoData, setTodoData] = useState([]);

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: value,
    };
    setTodoData([...todoData, newTodo]);
    setValue("");
  };

  return (
    <div>
        <div className="title">
          <h1>{part}</h1>
          <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
          <List todoData={todoData} setTodoData={setTodoData} />
        </div>
    </div>
  );
}
