import React from 'react'
import '../css/AdminDashboard.css'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
    const navigate = useNavigate()
    return (
        <div className='AdminDashboard'>
            <div className="wrapper">
                <h1>Admin Pannel Coming Soon</h1>
                <button onClick={()=>navigate('/')}>Back To Home Page</button>
                
            </div>
        </div>
    )
}

export default AdminDashboard