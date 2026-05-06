
import React, { useState } from 'react'
import './App.css'
import { useTodos } from './hooks/useTodos'
import TodoItems from './components/TodoItems'

function App() {

  const [newTodo, setNewTodo] = useState<string>('')

  //! useTodos import
  //*  hooks folder ar useTodos file thaka
  const{todos,addTodo,removeTodo,toggleTodo} = useTodos()


  //! React.FocusEvent <HTMLFormElement> -> form ar janno ai code 
  const handelSubmitTodo = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(newTodo.trim()){
      addTodo(newTodo.trim()) ;
      setNewTodo('')
    }

  }

  return (
    <>
      <div className='min-h-screen px-10  bg-gray-100'>
        <div className='max-w-md mx-auto p-5'>
          <h1 className='text-3xl font-medium text-center'>Todo App</h1>
          <form className='mt-7' onSubmit={handelSubmitTodo}>
            <div className='flex gap-2'>
              <input type="text" placeholder='Add todo ...'
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className='flex-1 px-4 border border-gray-400 rounded focus:outline-none'
              />
              <button type='submit' className='px-4 py-2 bg-sky-500 text-white hover:bg-sky-600 rounded duration-300'>Add</button>
            </div>
          </form>

          {/* display items */}
          <div>
           {
            todos.map((todo,index) => (
             <TodoItems 
              key={index}
              todo={todo} 
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
             />
            ))
           }
          </div>
        </div>
      </div>
    </>

  )
}

export default App
