import React from 'react'
import AddTodo from '@/Components/addTodo'
import Todos from '@/Components/Todos'
import Navbar from '@/Components/Navbar'
import './globals.css'
import { LuListTodo } from "react-icons/lu";

function Page(){
  return(
    <main>
      <div className="heading">
      <LuListTodo id='icons' /><h2>  TODO NEXT + TYPESCRIPT </h2> <LuListTodo id='icons' />  
      </div>   <br />
      <hr />
      <Navbar/>
      <AddTodo />
      <Todos/>
    </main>
    
  )
}

export default Page