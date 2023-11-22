import React, { useState , useEffect } from 'react'
import foodPandaLogo from '../Images/foodPandaLogo.png'
import '../css/Login.css'
import { useNavigate, Outlet } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Signin ,  auth } from '../config/Firebase'
import 'firebase/auth';


const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const signupnew = () => {
        navigate('/signup')
    }

   
  
   

    async function loginac() {
        if (email === null || password === null) {
            Swal.fire({
                icon: "error",
                title: "Please Filled out the empty area",
            });
        }
        else {


            try {
                await Signin(email, password)
                navigate('/')
                Swal.fire(
                    'Successfully',
                    'Login'
                )
            } catch (e) {
                Swal.fire({
                    icon: 'error',
                    title: 'You have enter wrong email and password',
                })
            }
            setEmail("")
            setPassword("")
        }
    }
    return (
        <div>
            <div className="form" >
                <p className="logo1"> <img src={foodPandaLogo} alt='' width={"50%"} /> </p>
                <p className="logo">Login</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required="" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required="" />
                <button className="login" onClick={loginac}>Login</button>
                <br />
                <button className="login">Login with Google</button>
                <div className="loginNew" onClick={signupnew}>Don't Have an Account Signup</div>
            </div>
            <Outlet />
        </div>
    )
}

export default Login