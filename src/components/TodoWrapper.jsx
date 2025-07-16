import '../App.css'
import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

//V4
import { v4 as uuidv4 } from 'uuid';
//TOAST
import { ToastContainer, toast } from 'react-toastify';




uuidv4();

const TodoWrapper = () => {


  const [todos, setTodos] = useState([]);

  // State for storing IDs of checked todos
  const [checkedTodos, setCheckedTodos] = useState([]);
  
  const addTodo = (todo) =>{
    setTodos(t => [...t, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    toast.success("Task Added Successfully!", {autoClose: 1500});
  }

  const toogleComplete = id =>{
    setTodos(todos.map(todo => (todo.id === id ? {...todo, completed: !todo.completed} : todo)))
  }

  // update isEditing to TRUE to show the edit components
  const editTodo = id => {
    setTodos(todos.map(todo => (todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo)))
  }

  const editTask = (task, id) =>{
    setTodos(todos.map(todo => (todo.id === id ? {...todo, task: task, isEditing: !todo.isEditing} : todo)))
    toast.info("Task Updated Successfully!", {autoClose: 1500});
  }


  const deleteTodo = id =>{
    setTodos(todos.filter(todo => (todo.id !== id)))
    toast.error("Task Deleted Successfully!", {autoClose: 1500});
  }


  // Function to handle checkbox toggle
  const handleCheck = (id) => {
    setCheckedTodos(prev => {
      // If the ID is already in the array, remove it (uncheck)
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      } 
      // Otherwise, add it (check)
      else {
        return [...prev, id];
      }
    });

  };
 
  const deleteAllChecked = () => {
    if(checkedTodos.length > 0){
      setTodos(todos.filter(todo => (!checkedTodos.includes(todo.id))))
      toast.error("Checked Task Deleted Successfully!", {autoClose: 1500});
    }
    
  }



  return (
    <>
      <div className='TodoWrapper'>
        <h1>To do List</h1>
          
        <TodoForm addTodo={addTodo} />
        {todos.length > 0 ? <button className='delete-checked-todo' onClick={deleteAllChecked}>Delete checked task</button> : ''}
        {todos.map((todo,index) => (
          todo.isEditing ? (
            <EditTodoForm 
              key={index} 
              editTodo={editTask} 
              task={todo}/>  
          ) : (
            <Todo 
              key={index} 
              task={todo} 
              toogleComplete={toogleComplete} 
              editTodo={editTodo} 
              deleteTodo={deleteTodo}  
              handleCheck={handleCheck}
              isChecked={checkedTodos.includes(todo.id)} 
            />
          )
              
         
        ))}

        
      </div>
      <ToastContainer />
    </>

    
  )
}

export default TodoWrapper
