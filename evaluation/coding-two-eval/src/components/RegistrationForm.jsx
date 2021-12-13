import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
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
        console.log(user)

    }
    const handleChange = (e)=>{
       console.log(e)
    const  {name,value} = e.target;
       console.log(name,value)
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