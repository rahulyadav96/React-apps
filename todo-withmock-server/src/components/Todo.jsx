import { useEffect, useState } from "react"
import { TodoInput } from "./TodoInput"
import axios from "axios";
import "./todo.css"
export const Todo = ()=>{
    const [todos,setTodos] = useState([]);
    const [page,setPage] = useState(1);
    const[loading,setLoading] = useState(false);
    const[err,setError] = useState(false);

    const handleTodo = (task)=>{
        if(todos.length<5){
            setTodos([...todos,task])
        }
    }

    useEffect(()=>{
        fetchData();
    },[page])

    const fetchData = ()=>{

        setLoading(true);
        axios.get(`http://localhost:3001/todos?_page=${page}&_limit=5`)
        .then((res)=>{
            setLoading(false);
            setTodos(res.data)
        })
        .catch((err)=>{
                setLoading(false);
                setError(true);
        })

    }

    const handleToggle=(todo)=>{
       
        axios.patch(`http://localhost:3001/todos/${todo.id}`,{"status":!todo.status})
        .then((res)=>{
            fetchData();
        })
        .catch((err)=>{
            console.log(err)
            alert(err)
        })
    }
    const handleDelete = (id)=>{

        axios.delete(`http://localhost:3001/todos/${id}`)
        .then((res)=>{
            fetchData();
        })
        .catch((err)=>{
            alert(err)
        })
    }
    return <>
    <div>
        <TodoInput handleTodo = {handleTodo} />
        
        {loading?<p>Loading...</p>:<div className="todoItems">{

            todos.map((todo)=><div className="todo-box" key={todo.id}>
                <div  className="title-div"><span>{todo.title}</span><span>{todo.status?"Completed":"Pending"}</span><span>
                    <button onClick={()=>{
                        
                        handleToggle(todo)}}>Toogle Status</button>
                    <button onClick={()=>handleDelete(todo.id)}>Delete</button></span></div>
                </div>)
            } </div>
        }
        <div>
            <button disabled={page==1?true:false} onClick={()=>setPage(page-1)}>Prev</button>
            <button onClick={()=>setPage(page+1)}>Next</button>
        </div>
    </div>
    </>
}