import { useEffect, useState } from "react"
import { TodoInput } from "./TodoInput"
import axios from "axios"
export const Todo = ()=>{
    const [todos,setTodos] = useState([])
    const handleTodo = ()=>{
        
            axios.get("http://localhost:3001/todos")
            .then((res)=>setTodos(res.data))
            .catch((err)=>{
                console.log("err",err)
            })
    }

    useEffect(()=>{
        handleTodo();
    },[])
    return <>
    <div>
        <TodoInput handleTodo = {handleTodo} />
        <div className="todoItems">

        {
            todos.map((todo)=><h3 key={todo.id}>{todo.title}</h3>)
        }
        </div>
    </div>
    </>
}