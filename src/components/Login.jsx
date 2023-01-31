import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import axios from "../axios/axios"
import "../style/style.css"
import { firebase, auth } from '../firebase';



const Login = () => {

    const navigate = useNavigate()
    const [login, setLogin] = useState({
        phone: ""
    })
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');

    const { phone } = login

    const inputEvent = (e) => {

        console.log(e.target.value)
        console.log(e.target.name)

        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const signin = async(e) => {
        e.preventDefault()


        const userSingup = { phone }

        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        try {

            const body = JSON.stringify(userSingup)
            console.log(body)

            const res = await axios.post("/register", body, config)
            alert("User Login Successfully.")
            console.log(res)

        } catch (error) {

            console.log(error.response)
        }

     let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(phone, verify).then((result) => {
            // console.log(result)
            setfinal(result);
            alert("otp sent")
            setshow(true);
        }).catch((err) => { alert(err) });

        
    }


    const ValidateOtp = () => {

        console.log(otp)
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {

            console.log(result)
        }).catch((err) => {
            alert("Wrong otp");
        })
    }

    return (
        <>
            <section>
                <div className="form_data" style={{ display: !show ? "block" : "none" }}>
                    <div className="form_heading">
                        <h1>Login</h1>
                    </div>
                    <form >

                        <div className="form_input">

                            <label>Mobile Number</label>
                            <input type='text' name='phone' placeholder="Enter Your Mobile Number" value={phone} onChange={inputEvent}></input>
                            <div id="recaptcha-container"></div>

                        </div>

                        <button className="btn" onClick={signin}>Send Otp</button>
                        <p>Don't have and account<NavLink to="register">Sing up</NavLink></p>
                    </form>
                </div>
                <div className="form_data" style={{ display: show ? "block" : "none" }}>
                    {console.log(show)}
                    <div className="form_heading">
                        <h1>Verify Otp</h1>
                    </div>
                    <form>
                        <div className="form_input">
                            <label>Mobile Number</label>
                            <input type='text' name='phone' placeholder="Enter Your Otp" onChange={(e) => { setotp(e.target.value) }}></input>
                        </div>

                        <button className="btn" onClick={ValidateOtp}>Verify Otp</button>

                    </form>
                </div>
            </section>
        </>
    )

}


export default Login;


