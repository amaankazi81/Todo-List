"use client"

import React from 'react'
import { useTodos } from '@/Store/todos'
import { useSearchParams } from 'next/navigation'
import { todo } from 'node:test'

const Todos =()=>{
    const {todos, toggleTodoAsCompleted, handleTodoDelete} = useTodos()
    const searchParams = useSearchParams()
    const todosFilter = searchParams.get('todos')

    console.log(todos)

    let filterTodos = todos

    if(todosFilter === 'active'){
        filterTodos = filterTodos.filter((todo)=> !todo.completed)
    } else if(todosFilter === 'completed'){
        filterTodos = filterTodos.filter((todo)=> todo.completed)
    }


    return(
        <div className='tolist' >
            <ul>
        {
            filterTodos.map((todo)=>{
                return <li key={todo.id}>
                    
                        <input type="checkbox" name='' id={`todo-${todo.id}`} checked={todo.completed} onChange={()=> toggleTodoAsCompleted(todo.id)} />
                        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                        {
                            todo.completed && (
                                <button className='delete' type='button' onClick={()=> handleTodoDelete(todo.id)}>Delete </button>
                            )
                        }
                    </li>
            })
        }
        </ul>
        </div>
    )
}

export default Todos