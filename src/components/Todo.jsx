import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({task, toogleComplete, deleteTodo, editTodo, handleCheck, isChecked}) => {
  return (
    <div className='Todo'>
      <input type="checkbox" checked={isChecked} onChange={() => handleCheck(task.id)}/>
      <p onClick={()=> toogleComplete(task.id)} className={`${task.completed ? 'completed' : 'incompleted'}`}>{task.task}</p>
      <div className='acton-btn'>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo
