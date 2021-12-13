import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { successNotification, failureNotification  } from "../customHooks/useNotification";
import { fetchUser } from "../customHooks/useAsync";
import axios from "axios";
const Form = styled.form`
    width:50%;
    margin:auto;
    text-align:left;
    display:flex;
    flex-direction:column;
    gap:10px;
    border:2px solid blue;
    border-radius:10px;
    padding:10px;
    margin-bottom:50px;
    &>div{
        display:flex;
        justify-content:space-between;
        align-items:center;
        
        &>.outlined-basic{
            heigth:50px;
        }
    }
    &>.sbt{
        justify-content:center;
        text-align:center;
        margin-top:20px;
    
`
export const RegistrationForm = ()=>{
    const [user,setUser] = useState({
        fname:"",
        lname:"",
        email:"",
        dob:""
    })
    const handleSubmit = (e)=>{

       // console.log(e)
        e.preventDefault();
        console.log(user);
        let registered = fetchUser(user.email);
        if(!registered){

            axios.post("http://localhost:3001/users",user)
            .then((res)=>{
                //let data = {text:"Successfull",time:2000}
                successNotification("Successfull",2000)
            })
            .catch((err)=>{
                //let data = {text:"Successfull",time:2000}
                failureNotification("Something Wrong",2000)
            })
        }else{
            alert("user already registred")
        }
    }
    const handleChange = (e)=>{
    const  {name,value} = e.target;
       
        setUser({...user, [name] : value})
    }
    return <>
    <Form >
        <div>
           <label> Enter First Name :</label>
           <TextField className="outlined-basic" label="First Name" name="fname" variant="outlined" onChange={(e)=>handleChange(e)} value={user.fname}/>
        </div>
        <div>
           <label> Enter Last Name :</label>
           <TextField className="outlined-basic" label="Last Name" name="lname" variant="outlined" onChange={(e)=>handleChange(e)} value={user.lname} />

        </div>
        <div>
           <label>Email :</label>
           <TextField className="outlined-basic" type="email" label="Email" name = "email" variant="outlined" onChange={(e)=>handleChange(e)} value={user.email} />

        </div>
        <div>
           <label> Date Of Birth:</label>
           <TextField className="outlined-basic"  variant="outlined" name="dob" type="date" onChange={(e)=>handleChange(e)} value={user.dob} />

        </div>

        <div className="sbt">
        <Button variant="contained" onClick={(e)=>handleSubmit(e)} >Submit</Button>
        </div>
            
    </Form>
    </>
}