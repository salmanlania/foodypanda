import React ,{useState} from 'react'
import foodPandaLogo from '../Images/foodPandaLogo.png'
import '../css/SignUp.css'
import { useNavigate , Outlet } from 'react-router-dom'
import { register } from '../config/Firebase'

const SignUp = () => {
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()
    const [firstName , setFirstName] = useState()
    const [lastName , setLastName] = useState()
    const navigate = useNavigate()
    const signup = async ()=>{
        await register(email ,password ,firstName , lastName)
        navigate('/')
    }
    const loginOld = ()=>{
        navigate('/login')
    }
    
    return (
        <div>
            <div className="form" >
                <p className="logo1"> <img src={foodPandaLogo} alt='' width={"50%"} /> </p>
                <p className="logo">SignUP</p>
                <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name" required="" />
                <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name" required="" />
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required="" />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required="" />
                <button  className="signup" onClick={signup}>Sign-Up</button>
                <hr />
                <div className="signupnew" onClick={loginOld}>Already have an account</div>
            </div>
            <Outlet />
        </div>
    )
}

export default SignUp