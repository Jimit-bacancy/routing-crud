import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditUser() {
    const {id} = useParams()
    let navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    })

    useEffect(() => {
        loadUser()
    }, []);

    const { name, username, email, phone } = user

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3003/users/${id}`, user)
        navigate("/")
        alert("Data updated successfully..")
    }

    const loadUser = async () => {
        const response = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(response.data)
    }

    return (
        <div>
            <h1 className="text-center py-4">Edit User</h1>
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
                    <button type="submit" className="btn btn-primary">Update User</button>
                </div>
            </form>
        </div>
    )
}

export default EditUser
