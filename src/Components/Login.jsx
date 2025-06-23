import React from 'react'
import {useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {
     
    const [email, setEmail] = useState() 
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {console.log(result)
          if(result.data === "Success"){
         navigate('/home')
          }
        })
        .catch(err=> console.log(err))
    }

    return (
        <>
        <div className="tt">
       <div id="reg">
       <form onSubmit={handleSubmit}>
        <fieldset>
            <div className="field">
                <div className="mon1">
           <legend id="mon">Login</legend>
           </div>
           <div className="pot">
                                 
           <label htmlFor ="email" id="email1">Email: </label>
           <input type="text" name="email" id="email" required  
           onChange={(e) => setEmail(e.target.value)}
           /><br></br>

           <label htmlFor ="password" id="password1">password: </label>
           <input type="password" name="password" id="password" required  
           onChange={(e) => setPassword(e.target.value)}
           /><br></br>
<div id="center">
            
            <button type="submit" id="login">
            Login
            </button>
</div>
</div></div>
</fieldset>
       </form>
       </div>
       </div>
       </>
    )

}
export default Login;