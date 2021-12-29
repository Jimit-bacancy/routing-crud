import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SeeUser() {

    const {id} = useParams()
    // let navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    })

    useEffect(() => {
        loadUser()
    }, []);

    const loadUser = async () => {
        const response = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(response.data)
    }

    return (
        <div className="container">
            <h2 className="text-center py-4">Welcome - {user.name}</h2>
            <ul className="list-group w-50 text-center">
                <li className="list-group-item">UserName : {user.username}</li>
                <li className="list-group-item">Email : {user.email}</li>
                <li className="list-group-item">Phone : {user.phone}</li>
            </ul>
        </div>
    )
}

export default SeeUser
