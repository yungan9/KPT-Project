import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [todoData, setTodoData] = useState( [
    {
      id:"1",
      title:"공부하기",
    },
    {
      id:"2",
      title:"청소하기",
    }
  ]);

  const [value, setValue] = useState("");

  const handleClick = (id) =>{
    let newTodoData = todoData.filter(data => data.id !== id);
    console.log('new', newTodoData);
    setTodoData(newTodoData);
  }

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
        {todoData.map(data => (
          <div className='memoBlock' key={data.id}>
            {data.title}
            <button onClick={() => handleClick(data.id)}>x</button>
          </div>
        ))}
        
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
