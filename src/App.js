import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

const todoData =[
  {
    id:"1",
    title:"공부하기",
  },
  {
    id:"2",
    title:"청소하기",
  }
];


function App() {
  
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
