import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import axios from "../axios/axios"
import "../style/style.css"

const Singup = () => {

    const navigate = useNavigate()
    const [singup, setSingup] = useState({
        phone: ""
    })

    const { phone } = singup

    const inputEvent = (e) => {

        console.log(e.target.value)
        console.log(e.target.name)

        setSingup({ ...singup, [e.target.name]: e.target.value })
    }

    const onSingup = async (e) => {
        e.preventDefault()

        
    }

    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Signup</h1>
                    </div>
                    <form>
                        <div className="form_input">
                            <label>Mobile Number</label>
                            <input type='text' name='phone' placeholder="Enter Your Mobile Number"
                                value={phone} onChange={inputEvent}></input>
                        </div>

                        <button className="btn" onClick={onSingup}>Sing up</button>
                        <p>You have already login<NavLink to="/">Login</NavLink></p>
                    </form>
                </div>
            </section>
        </>
    )

}

export default Singup