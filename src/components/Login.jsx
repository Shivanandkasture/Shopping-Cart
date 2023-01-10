import { useState } from "react"
import {json, Link, useNavigate } from "react-router-dom"
import axios from "../axios/axios"
const Login = () => {

    const navigate = useNavigate()
    const [login, setLogin] = useState({
        email:'', password:''
    })

    const {email, password} = login

     const inputEvent = (e) => {

        console.log(e.target.value)
        console.log(e.target.name)

        setLogin({...login,[e.target.name]:e.target.value})
    }

    const onLogin = async(e) => {
        e.preventDefault()
       
        const userLogin = {
            email:email, password:password
        }

        const config ={
            headers: {
                "Content-Type": "application/json",
            }
        }
        try{

            const body = JSON.stringify(userLogin)
            console.log(body)

            const res = await axios.post("/login", body,config)
            alert("User Login Successfully.")
            console.log(res)
            const token = res.data.token
            console.log(token)
            localStorage.setItem('token', token)
          
            navigate("/BookList")

        }catch(error){
            alert(error, 'User invaild.')
            console.log(error.response)
        }
    
    }

    return (
        <>
            <div>
            <h1>Login</h1>
                <form >
                    <div><input type='email' placeholder="Enter your email" name="email" value={email} onChange={inputEvent} /></div>
                    <div><input type='password' placeholder="Enter your password" name="password" value={password} onChange={inputEvent} /></div>
                   
                    <div> <input type='submit' placeholder="Login" onClick={onLogin} /></div>
                    <h4>New User? Please
                        <Link to={'/'}> Register</Link>
                    </h4>
                </form>
            </div>
        </>
    )

}

export default Login