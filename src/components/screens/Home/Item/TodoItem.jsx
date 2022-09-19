import React from 'react'
import CheckBox from './CheckBox'
import { BsTrash } from 'react-icons/bs'
import cn from 'classnames'


const TodoItem = ({todo, changeTodo, removeTodo}) => {
  return (
  <div 
     className='flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full'
     onClick={() => changeTodo(todo.id)}
    >
    <button className='flex items-center'>
      <CheckBox isCompleted={todo.isCompleted} />
      <span
      className={cn({
        'line-through': todo.isCompleted,
      })}
      >
        {todo.title}
      </span>
    </button>
    <button onClick={() => removeTodo.id}>
      <BsTrash size={22} className='text-gray-600 hover:text-red-700 transition-colors
      ease-in-out duration-300' />
    </button>
  </div>
  )
}

export default TodoItem