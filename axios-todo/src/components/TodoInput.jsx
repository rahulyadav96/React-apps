import { useState } from "react";
import axios from "axios"
export const TodoInput = ({handleTodo})=>{
    const [text ,setText] = useState("");
    const handleClick = ()=>{
        const task = {
            title:text,
            status:false 
        }
       
        axios.post("http://localhost:3001/todos",task)
        .then((res)=>{
            handleTodo();
        })
       .catch((err)=>{
           console.log("err",err)
       })
       
    }
    return <>
    <div>
        <input type="text" placeholder="Enter task" onChange={(e)=>setText(e.target.value)} />
        <button className="addtodo" onClick={handleClick}>Add</button>
    </div>
    </>
}