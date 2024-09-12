import React from 'react';
import '../style/List.css';

export default function List({todoData, setTodoData}) {
    const handleClick = (id) =>{
        let newTodoData = todoData.filter(data => data.id !== id);
        console.log('new', newTodoData);
        setTodoData(newTodoData);
        }

    return (
    <div>
        {todoData.map(data => (
            <div className='memoBlock' key={data.id}>
                {data.title}
                <button onClick={() => handleClick(data.id)}>x</button>
            </div>
            ))}
        </div>
    )
}
