import { useState } from "react";
import axios from "axios"
export const TodoInput = ({handleTodo})=>{
    const [text ,setText] = useState("");
    const[loading,setLoading] = useState(false)
    const handleClick = ()=>{
        const task = {
            title:text,
            status:false 
        }
       setLoading(true)
        axios.post("http://localhost:3001/todos",task)
        .then((res)=>{
            setText("")
            setLoading(false)
            handleTodo(res.data);
        })
       .catch((err)=>{
           setLoading(false)
           console.log("err",err)
       })
       
    }
    return <>
    <div>
        <input type="text" placeholder="Enter task" onChange={(e)=>setText(e.target.value)} />
        <button className="addtodo" onClick={handleClick}>{loading?"loading...":"Add"}</button>
    </div>
    </>
}