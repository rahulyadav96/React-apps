import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
    }
    &>.outlined-basic{
        heigth:50px;
    }
    &>.sbt{
        justify-content:center;
        text-align:center;
        margin-top:20px;
`
export const RegistrationForm = ()=>{
    const [use,setUser] = useState({})
    const handleSubmit = ()=>{
        e.preventDefault();

    }
    return <>
    <Form onSubmit={handleSubmit}>
        <div>
           <label> Enter First Name :</label>
           <TextField className="outlined-basic" label="First Name" variant="outlined" />
        </div>
        <div>
           <label> Enter Last Name :</label>
           <TextField className="outlined-basic" label="Last Name" variant="outlined" />

        </div>
        <div>
           <label>Email :</label>
           <TextField className="outlined-basic" label="Email" variant="outlined" />

        </div>
        <div>
           <label> Date Of Birth:</label>
           <TextField className="outlined-basic" label="DOB" variant="outlined" />

        </div>

        <div className="sbt">
        <Button variant="contained" >Submit</Button>
        </div>
            
    </Form>
    </>
}