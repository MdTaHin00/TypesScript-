import { useState } from "react"
import type { Todo } from "../types/todo"


export const useTodos = () =>{
    const [todos , setTodos] = useState <Todo []>([])

    const addTodo = (text:string) => {
        const newTodo : Todo ={
            id: Date.now().toString(),
            text:text ,
            completed: false
        }

        setTodos(prvTodos => [...prvTodos , newTodo])
    }

    const toggleTodo =(id:string) =>{
         setTodos((pre) => 
            pre.map(todo  => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const removeTodo =(id : string)=>{
        setTodos((pre) => pre.filter(todo => todo.id !== id ))    
    }

    return {
        todos , 
        addTodo ,
        toggleTodo,
        removeTodo
    }
}
