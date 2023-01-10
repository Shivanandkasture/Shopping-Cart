import { useState } from "react"
import { Link } from 'react-router-dom';
import axios from '../axios/axios'
const CreateUser = () => {

    const [signup, setSingup] = useState({
        fname: '', lname: '', email: '', phone: '', password: '', street: '', city: '', pincode: ''
    })

    const { fname, lname, email, phone, password, street, city, pincode } = signup

    const inputEvent = (e) => {

        setSingup({ ...signup, [e.target.name]: e.target.value })
      //  console.log({ [e.target.name]: e.target.value})
    }



    const onSubmit = async (e) => {
        e.preventDefault()

        const userRegister = {
            fname: fname,
            lname: lname,

            email: email,
            phone: phone,
            password: password,
            address: {
                shipping: {
                    street: street,
                    city: city,
                    pincode: pincode
                },
                billing: {
                    street: street,
                    city: city,
                    pincode: pincode
                }
            }
        }

        const config = {

            headers: {
                "Content-Type": "application/json",
            }
        }

        console.log(userRegister)
        try {
            const body = JSON.stringify(userRegister);
           // console.log(body)

            let res = await axios.post("/register", body, config)

            console.log(res)
            alert("you are successfully register")


            // navigate('/login')

        } catch (error) {
            alert(error.message)

            console.log(error.response);

        }
    }



    return (
        <>
            <div>
                <h1>Sign Up</h1>
                <form method="POST">
                    <div><input type='text' placeholder="Enter your first name" name='fname' value={fname} onChange={inputEvent} /></div>
                    <div><input type='text' placeholder="Enter your last name" name='lname' value={lname} onChange={inputEvent} /></div>
                    <div> <input type='email' placeholder="Enter your email" name='email' value={email} onChange={inputEvent} /></div>
                    <div><input type='text' placeholder="Enter your phone" name='phone' value={phone} onChange={inputEvent} /></div>
                    <div><input type='password' placeholder="Enter your password" name='password' value={password} onChange={inputEvent} /></div>
                    <div>  <label>Address</label></div>
                    <div><input type='text' placeholder="Enter your street" name='street' value={street} onChange={inputEvent} /></div>
                    <div><input type='text' placeholder="Enter your city" name='city' value={city} onChange={inputEvent} /></div>
                    <div> <input type='text' placeholder="Enter your pincode" name='pincode' value={pincode} onChange={inputEvent} /></div>
                    <div>  <label>Billing Address</label></div>
                    <div><input type='text' placeholder="Enter your street" name='street' value={street} onChange={inputEvent} /></div>
                    <div><input type='text' placeholder="Enter your city" name='city' value={city} onChange={inputEvent} /></div>
                    <div> <input type='text' placeholder="Enter your pincode" name='pincode' value={pincode} onChange={inputEvent} /></div>
                    <div> <input type='submit' placeholder="Submit" onClick={onSubmit} /></div>
                    <h4>Already have an account
                        <Link to={'/login'}> Register</Link>
                    </h4>
                </form>
            </div>
        </>
    )
}

export default CreateUser;