import React from 'react'
// import Swal from 'sweetalert2'
import ShopingBag from '../Images/add-to-bag.png'
import foodPanda from '../Images/foodPandaLogo.png'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from 'react'
import { auth } from "../config/Firebase"
import Swal from 'sweetalert2'
// import { User } from 'firebase/auth';
import '../css/Navbar.css'
import { useSelector } from 'react-redux'



const Navbar = () => {
  const navigate = useNavigate()
  const [log, setLog] = useState(false)
  const [user, setUser] = useState()
  const [showCart, setShowCart] = useState(false)



  const cart = useSelector((state) => state.card)

  useEffect(() => {
    onAuthStateChanged(auth, (users) => {
      if (users) {
        setUser(users.email)
        setLog(true)
        navigate('/')


      } else {
        setLog(false)
        navigate('/login')
      }
    })
  }, [])
  const logout = async () => {
    try {
      await signOut(auth)
      setLog(false)
      setUser()
      Swal.fire("Log Out")


    } catch (e) {
      Swal.fire(e.message)

    }
  }
  const login = () => {
    navigate('/login')
  }

  const addCart = () => {
    setShowCart(!showCart)
    navigate('/checkout')
  }
  return (
    <div className='Navbar'>
      <nav>
        <h3><img src={foodPanda} onClick={() => navigate('/')} style={{ cursor: 'pointer' }} width={180} height={120} alt="" /></h3>
        <b><span>Welcome <i>{user}</i></span></b>
        <ul>
          {!log ? <button className='login' onClick={login}>Login</button>
            :
            <button className='login' onClick={logout}>Logout</button>}
          <li onClick={addCart}>
            <img style={{ cursor: 'pointer' }} src={ShopingBag} width={40} alt="" />
            {cart.length}
            {showCart && <div>
              {/* <MiniCard /> */}
            </div>}
          </li>
        </ul>
      </nav>
    </div >
  )
}

export default Navbar