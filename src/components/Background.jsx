import React from 'react'
import Save from './Save';
import TodoArea from './TodoArea';
import { useState } from 'react';

const Background = () => {
  const [allTodos,setAllTodos] =useState( [
    {
      id:1,
      text:'This is todo 1',
      completed:false
    },
    {
      id:2,
      text:'This is todo 2',
      completed:false
    },
    {
      id:3,
      text:'This is todo 3',
      completed:false
    },
    {
      id:4,
      text:'This is todo 4',
      completed:true
    },
  ])
  const addTodo =(todo) =>{
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTodo = {
      id:id,
      text:todo,
      completed:false
    }
    console.log(newTodo)
    setAllTodos([...allTodos,newTodo])
  }

  const toggleCompleted = (id) =>{
    setAllTodos(allTodos.map((task)=>task.id === id ? {...task,completed:!task.completed}:task ))
  }


  const deleteTodo=(id) =>{
    setAllTodos(allTodos.filter((task)=>task.id !== id))
  }


  return (
    <div className='rounded-[30px] background pt-2 bg-gray-800 w-6/12 h-[95%] m-auto flex flex-col items-center'>
    <div className='text-white mb-10'>
      <h1 className='text-[4rem] font-semibold'>My Todo</h1>
    </div>
    <Save onSave={addTodo}/>
    <TodoArea allTodos={allTodos} onToggle={toggleCompleted} ondelete={deleteTodo}/>
  </div>
  )
}

export default Background