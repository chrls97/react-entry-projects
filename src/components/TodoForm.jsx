import React, { useState } from 'react'

const TodoForm = ({addTodo, checkTodo}) => {

  const [value, setValue] = useState('');

  const submitChange = e => {
    e.preventDefault();
    
    if(value != ""){
      addTodo(value);
      setValue('');
    }

  }



  return (
    <>
      <form className='TodoForm' onSubmit={submitChange}>
   
        <input type="text" className='todo-input' value={value} placeholder='What to do today?' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
      </form>
   
    </>
  )
}

export default TodoForm
