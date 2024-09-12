import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import List from './components/List';

function App() {

  const [todoData, setTodoData] = useState( [
    
  ]);

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    console.log('e',e.target.value);
    setValue(e.target.value);
  }

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
        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            name='value'
            placeholder='text...'
            value={value}
            onChange={handleChange}
          />
          <input
            type='submit'
            value='입력'
            className='btn'/>
        </form>
      </div>
      
    </div>
  );
}

export default App;
