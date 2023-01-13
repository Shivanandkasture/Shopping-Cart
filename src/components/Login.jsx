import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "../axios/axios"
const Login = () => {

    const navigate = useNavigate()
    const [login, setLogin] = useState({
        email: '', password: ''
    })

    const { email, password } = login

    const inputEvent = (e) => {

        console.log(e.target.value)
        console.log(e.target.name)

        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const onLogin = async (e) => {
        e.preventDefault()

        const userLogin = {
            email: email, password: password
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        try {

            const body = JSON.stringify(userLogin)
            console.log(body)

            const res = await axios.post("/login", body, config)
            alert("User Login Successfully.")
            console.log(res)
            const token = res.data.data.token
            console.log(token)
            localStorage.setItem('token', token)

            navigate("/user/:userId/profile")

        } catch (error) {
            alert(error, 'User invaild.')
            console.log(error.response)
        }

    }

    return (
        <>
            <div className="container mt-3">
                <h1>Login</h1>
                <form>
                    <div class="mb-3 col-lg-6">
                        <label class="form-label">Email address</label>
                        <input type="email" class="form-control" name="email" value={email} onChange={inputEvent} />

                    </div>
                    <div class="mb-3 col-lg-6">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control"name="password" value={password} onChange={inputEvent}  />
                    </div>
                    <p>New User? Please
                        <Link to={'/'}> Register</Link>
                    </p>
                    <button type="submit" class="btn btn-primary" onClick={onLogin}>Submit</button>
                </form>
            </div>
        </>
    )

}

export default Login