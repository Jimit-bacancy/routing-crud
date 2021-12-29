import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddUser() {

    let navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    })

    const { name, username, email, phone } = user

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:3003/users", user)
        setUser({
            name: "",
            username: "",
            email: "",
            phone: ""
        })
        navigate("/")
    }

    return (
        <div>
            <h1 className="text-center py-4">Add User</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your Name" value={name} name="name" onChange={e => handleChange(e)} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Enter Your UserName" value={username} name="username" onChange={e => handleChange(e)} />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Enter Your Email" value={email} name="email" onChange={e => handleChange(e)} />
                </div>
                <div className="mb-3">
                    <input type="phone" className="form-control" placeholder="Enter your phone number" value={phone} name="phone" onChange={e => handleChange(e)} />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Add User</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser
