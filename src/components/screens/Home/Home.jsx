import React, { useState } from 'react'
import TodoItem from './Item/TodoItem'
import CreateTodoField from './create-todo-field/CreateTodoField'



const data = [
    {
        id:'wefw11',
        title: 'Finish the eassy collaboration',
        isCompleted: false,

    },
    {
        id:'wefw12',
        title: 'Read next chapter of the book',
        isCompleted: false,
        
    },
    {
        id:'wefw13',
        title: 'Send the finished aasignment',
        isCompleted: false,
        
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = id => {
        const copy = [...todos]
        const currnet = copy.find(t => t.id === id)
        currnet.isCompleted = !currnet.isCompleted 
        setTodos(copy)
    }

    const removeTodo = id => setTodos([...todos].filter(t => t.id != id))


    const addTodo  = (title) => {
        setTodos([...todos, {
            id: new Date(),
            title,
            isCompleted: false
        }])
    }

    console.log(todos)
    return (
    <div className='py-10 bg-gray-900 h-screen text-white w-4/5 mx-auto'>

        <h1 className='text-2xl font-bold text-center mb-10'>Todo for FlatStack practice</h1>

    {todos.map(todo => (
    <TodoItem
     key ={todo._id} 
     todo={todo} 
     changeTodo={changeTodo} 
     removeTodo={removeTodo}
     /> 
    ))}
    <CreateTodoField  addTodo={addTodo}/>
    </div>
    )
}

export default Home
