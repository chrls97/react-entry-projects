import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {

  const [value, setValue] = useState(task.task);

  const submitChange = e => {
    e.preventDefault();
    if(value != ""){
      editTodo(value, task.id);
      setValue('');
    }
  }

  return (
    <>
    
      <form className='TodoForm' onSubmit={submitChange}>
        <input type="text" className='todo-input' value={value} placeholder='What to do today?' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update Task</button>
      </form>
    </>
  )
}

export default EditTodoForm
