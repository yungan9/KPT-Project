import React from 'react'

export default function Form({value,setValue,handleSubmit}) {

    const handleChange = (e) => {
        console.log('e',e.target.value);
        setValue(e.target.value);
      }

  return (
    <div>
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
  )
}
