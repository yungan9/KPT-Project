import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import List from './components/List';
import Form from './components/Form';

function App() {

  const [todoData, setTodoData] = useState( [
    
  ]);

  const [value, setValue] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: value,
    }
    setTodoData([...todoData, newTodo]);
    setValue("");
  }
  
  return (
    <div className='container'>
      <div className='title'>
        <h1>Keep</h1>
        <List todoData={todoData} setTodoData={setTodoData}/>
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit}/>
      </div>
      
    </div>
  );
}

export default App;
