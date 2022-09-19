import React , {useState} from 'react'

const CreateTodoField = ({addTodo}) => {
    const [title, setTitle] = useState('')
  return (
    <div className='border-gray-900 border-2 px-5 py-2 flex items-center 
    justify-between mb-4w-full p-5 rounded-2xl mt-20'>
        <input
        type="text" 
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyPress={e => e.key === 'Enter' && addTodo(title)}
        className='bg-transparent w=full border-none
        outline-none'
        placeholder='Add a Task'
        />
     </div>
  )
  }
export default CreateTodoField