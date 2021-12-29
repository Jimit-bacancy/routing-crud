import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await axios.get("http://localhost:3003/users")
        setUsers(response.data.reverse())
    }

    return (
        <div className="container">
            <h1 className="text-center py-4">Users</h1>
            <table className="table table-striped mt-3 border shadow">
                <thead className="bg-dark text-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to="" className="btn btn-primary">View</Link>
                                    <Link to="" className="btn btn-success ms-3">Edit</Link>
                                    <Link to="" className="btn btn-danger ms-3">Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home
