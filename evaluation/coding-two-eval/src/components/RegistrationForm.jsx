import styled from "styled-components";
import TextField from '@mui/material/TextField';
const Form = styled.form`

`
export const RegistrationForm = ()=>{
    return <>
    <Form>
        <div>
           <label> Enter Your Name</label>
           <TextField id="outlined-basic" label="Outlined" variant="outlined" />

        </div>
        
    </Form>
    </>
}