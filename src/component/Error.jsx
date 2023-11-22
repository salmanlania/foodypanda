import React from 'react'
import '../css/Error.css'
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate()
    return (
        <div>
            <section className='Error'>
                <div className="error__wrapper">
                    <h1>4 <img src="https://c.tenor.com/Nl45qRGQk_0AAAAi/ghost-white.gif" alt='' /> 4</h1>
                    <p className="frown-it" data-splitting>ERROR</p>
                    <span className="a" onClick={()=>navigate('/')} >Back to home</span>
                </div>

            </section>
        </div>
    )
}

export default Error