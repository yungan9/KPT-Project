import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [todoData, setTodoDate] = useState( [
    {
      id:"1",
      title:"공부하기",
    },
    {
      id:"2",
      title:"청소하기",
    }
  ]);
  
  const handleClick = (id) =>{
    let newTodoData = todoData.filter(data => data.id !== id);
    console.log('new', newTodoData);
    setTodoDate(newTodoData);
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
        
      </div>
      
    </div>
  );
}

export default App;
