import React from 'react'
import {useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Signup() {
    const [name, setName] = useState() 
    const [email, setEmail] = useState() 
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit =(e) =>{
        e.preventDefault()
        axios.post('https://vercel-backendx.vercel.app/register', {name, email, password})
        .then(result => {console.log(result)
         navigate('/login')
        })
        .catch(err=> console.log(err))
    }

    return (
        <>
        <div className="tt">
       <div id="reg">
       <form onSubmit={handleSubmit}>
        
            <div className="field">
                <div className="mon1">
           <legend id="mon">Register</legend>
           </div>
           <div className="pot">
            <div className="hh">
           <label htmlFor ="name" id="name1">Name: </label>
           <input type="text" placeholder="Enter name" autoComplete="off" name="name" id="name" required 
           onChange={(e) => setName(e.target.value)} /><br></br> 
           </div>
           <label htmlFor ="email" id="email1">Email: </label>
           <input type="email" placeholder="Enter email" autoComplete="off" name="email" id="email" required  
           onChange={(e) => setEmail(e.target.value)}
           /><br></br>

           <label htmlFor ="password" id="password1">password: </label>
           <input type="password" placeholder="Enter password" autoComplete="off" name="password" id="password" required  
           onChange={(e) => setPassword(e.target.value)}
           /><br></br>

<div id="center">
            <input id="register" type="submit" value="Register"/><br></br>
            <p>Already have an account</p>
            <button id="login">
            < Link to="/login"id="pp">Login</Link>
            </button>
</div>
</div></div>

       </form>
       </div>
       </div>
       </>
    )

}
export default Signup;