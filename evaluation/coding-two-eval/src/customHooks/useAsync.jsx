import axios from "axios"

export const fetchUser = (email)=>{

    let user = false
    axios.get(`http://localhost:3001/users${email}`)
    .then((res)=> {
        console.log(res.data)
        //user = true
    })
    .catch((err)=>{
        console.log(err)
    })

    return user
}
  