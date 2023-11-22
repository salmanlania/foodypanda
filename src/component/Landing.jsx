import React from "react";
import { useNavigate } from "react-router-dom";

import refresh from '../Images/refresh-hero-home-pk.png'
import HomeVendor from '../Images/homeVendpr.JPG'
import karachi from "../Images/Karachi.jpg"
import islamabad from "../Images/Islamabad.jpg"
import multan from "../Images/Multan.jpg"
import faisalabad from "../Images/Faisalabad.jpg"
import Hyderabad from "../Images/Hyderabad.jpg"
import Peshawar from "../Images/Peshawar.jpg"
import Card from "./Card";
import Swal from "sweetalert2";
import '../css/Landing.css';
import Footer from "./Footer";
// import {postRestaurants} from '../config/Firebase'



function Landing() {
    const navigate = useNavigate()


    return (
        <div className="landing">
            <div className="container1" >
                <div className="main">
                    <img src={refresh} alt="" />
                </div>
                <div className="main1">
                    <p>It's the food and groceries you love, delivered</p>
                    <div className="findInput">
                        <input type="text" placeholder="Enter Your Full address" />
                        <button style={{ cursor: 'pointer' }} onClick={() => Swal.fire(
                            'Searching Food Feature Coming soon',
                        )}>Find Food</button>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="hero">
                    <div>
                        <p>You prepare the food, we handle the rest</p>
                    </div>
                    <div className="hero1">
                        <img src={HomeVendor} alt="" />
                    </div>
                </div>
            </div >

            <div className="container3" >
                <div className="card01">
                    <div className="card11">
                        <p>
                            List your restaurant or shop on foodpanda
                        </p>
                        <div>
                            <p>
                                Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
                            </p>
                        </div>
                        <div>
                            <p>
                                It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
                            </p>
                        </div>
                        <div>
                            <p>Interested? Let's start our partnership today!</p>
                            <button onClick={() => navigate('/admin')}>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== */}
            {/*             
            <button onClick={postData}>postData</button>  */}
            <div className="location">
                <div>
                    <p>
                        Find us in these cities and many more!
                    </p>
                </div>
            </div>
            <div className="container4">
                <span onClick={() => navigate('/restaurants')}><Card image={karachi} button={"karachi"} /></span>
                <Card image={Hyderabad} button={"Coming-Soon"} />
                <Card image={Peshawar} button={"Coming-Soon"} />
                <Card image={islamabad} button={"Coming-Soon"} />
                <Card image={multan} button={"Coming-Soon"} />
                <Card image={faisalabad} button={"Coming-Soon"} />
            </div>

            <div className="container7" >
                <div className="card2">
                    <div className="card3">
                        <p>
                            foodpanda for business
                        </p>
                        <div>
                            <p className="order">
                                Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.

                            </p>
                        </div>
                        <div>

                            <button className="business" onClick={() => navigate('/admin')}>Get Started</button>
                        </div>
                    </div>
                </div>
                {/* <button onClick={()=>postRestaurants()}>CLICK</button> */}
            </div>
            <Footer />
        </div>
    )
}

export default Landing