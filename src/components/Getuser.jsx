
import React, { useEffect, useState } from 'react'
import axios from "../axios/axios"
import { Link, useParams ,useNavigate} from 'react-router-dom'


const Getuser = () => {
    const navigate = useNavigate()
  
    const [getuser, setGetuser] = useState([])

    const token = localStorage.getItem('token')
    const userId = useParams()
    const userid = JSON.parse(JSON.stringify(userId))
    const id = userid.id;
    console.log(id)

    const fetchData = async (id) => {
        try {
            const res = await axios.get(`/user/:${id}/profile`, { headers: { 'x-api-key': token } })
            const allBook = res.data.data
            setGetuser(allBook)
        } catch (err) {
            let error = err.response.data.message
            if (error === "jwt expired" || "Please give TOKEN in request") {
                navigate('/login')
            } else alert(error)
        }
    }

    useEffect(() => {
        fetchData(id)
    }, [])


    return (
        <div>
            <div><h1> Home </h1></div>



        </div>
    )
}

export default Getuser