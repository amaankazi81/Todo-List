"use client"
import { useTodos } from '@/Store/todos'
import React, { FormEvent, useState } from 'react'


function AddTodo(){
    const [todo , setTodo] = useState<string>("")
    const {handleAddTodo} = useTodos()
    
    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if (!todo.trim()) return;
        handleAddTodo(todo);
        setTodo("")
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder='Write Your Todo' name='' value={todo} onChange={(event)=>setTodo(event.target.value)}/>
            <button type="submit">ADD</button>
            
        </form>
    )
}

export default AddTodo