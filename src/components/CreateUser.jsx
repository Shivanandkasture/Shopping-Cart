import { useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios/axios'
import validation from "../validations/validation";

const CreateUser = () => {
    const navigate = useNavigate()

    const [error, setError] = useState({})

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

        setError(validation(signup))

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

       // console.log(userRegister)
        try {
            const body = JSON.stringify(userRegister);
             console.log(body)

            let res = await axios.post("/register", body, config)

           // console.log(res)
            alert("you are successfully register")


            navigate('/login')

        } catch (error) {
            //  alert(error.message)

           // console.log(error.response);

        }
    }

    // useEffect(()=>{
    //     if(Object.keys(error).length!=0){
    //         alert("s")
    //     }
    // },[error])



    return (
        <>
            <div className="container mt-3">

                <section>
                    <div className="left_data">
                        <h3 className="text-center">Register</h3>
                        <form method="post" >
                            <div className="row">
                                <div className="mb-3 col-lg-6 col-md-6 col-12">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control" name="fname" value={fname} onChange={inputEvent} />
                                    {/* {error.fname && <p>{error.fname}</p>} */}
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-12">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control" name="lname" value={lname} onChange={inputEvent} />
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-12">
                                    <label className="form-label">Email address</label>
                                    <input type="email" className="form-control" name="email" value={email} onChange={inputEvent} />
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-12">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={inputEvent} />
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-12">
                                    <label className="form-label">phone</label>
                                    <input type="text" className="form-control" name="phone" value={phone} onChange={inputEvent} />
                                </div>

                                <div className="mb-3 col-lg-6 col-md-6 col-12">

                                    <label className="form-label">Address street</label>
                                    <input type="text" className="form-control" name="street" value={street} onChange={inputEvent} />
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-12">
                                    <label className="form-label">Address city</label>
                                    <input type="text" className="form-control" name="city" value={city} onChange={inputEvent} />
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-12">
                                    <label className="form-label">Address pincode</label>
                                    <input type="text" className="form-control" name="pincode" value={pincode} onChange={inputEvent} />
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-12">
                                    <label className="form-label">Billing street</label>
                                    <input type="text" className="form-control" name="street" value={street} onChange={inputEvent} />
                                </div>
                                <div className="mb-3 col-lg-6 col-md-6 col-12">
                                    <label className="form-label">Billing city</label>
                                    <input type="text" className="form-control" name="city" value={city} onChange={inputEvent} />
                                </div>
                                <div className="mb-3 c col-md-6 col-12">
                                    <label className="form-label">Billing pincode</label>
                                    <input type="text" className="form-control" name="pincode" value={pincode} onChange={inputEvent} />
                                </div>

                            </div>
                            <p>Already have an account
                                <Link to={'/login'}> Register</Link>
                            </p>
                            <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
                           
                        </form>

                    </div>
                    <div className="right_data"></div>
                </section>
            </div>
        </>
    )
}

export default CreateUser;