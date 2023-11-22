import React , {useState} from "react";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import '../css/CheckOut.css'
import bin from '../Images/bin.png'
import { removeCardToStore } from "../store/Card";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
// import { orderProceed } from "../config/Firebase";

function CheckOut() {
    const card = useSelector(state => state.card)
    let total = 0;
    card.map(item => {
        total += item.price

    })
    let delivery = 0
    if (total > 0){
        delivery += 150
    }
    let finalPrice = Math.floor( total + delivery) 
        const dispatch = useDispatch()
    const removeCard = (index) => {
        dispatch(removeCardToStore(index))
    }

    const [fullNames , setFullNames] = useState()
    const [creditCard , setCreditCard] = useState()
    const [expiry , setExpiry] = useState()
    const [cvv , setCvv] = useState()
    const [shipping , setShipping] = useState()
    const navigate = useNavigate()

    const checkoutOrder = async ()=>{
        
        Swal.fire(
            'Successfully',
            'Order Succesfull'
        )
        navigate('/')
    }
    // const checkoutOrder = async ()=>{
    //     await orderProceed(fullNames,creditCard,expiry,cvv,shipping)
    //     navigate('/')
    // }

    return (
        <>
            <header className="chekoutHeader">
                <div className="bg">
                    <table className="tableList">
                        <tr className="navbar">
                            <td>Item</td>
                            <td>Product Name</td>
                            <td className="marginRight">Price</td>
                            <td></td>
                        </tr>
                        {card.map((item, index) => {
                            return (
                                <table className="carding" >
                                    <tr>
                                        <td className="img"> <img className="proImg" src={item.item_image_url} alt="" /></td>
                                        <td className="cardingItem" >{item.item}</td>
                                        <td className="cardingPrice"> {item.price + ".00"}</td>
                                        <td className="remove"><img src={bin} onClick={() => removeCard(index)} className="delImg" /></td>
                                    </tr>
                                </table>
                            )
                        })}
                    </table>
                    <div className="checkTotal">
                        <h2 className="CheckTotalTotal">Total</h2>
                        <div className="total">
                            <div className="name">
                                <p>Subtotal:</p>
                                <p>Delivery Charges :</p>
                                <p>Grand Total:</p>
                            </div>
                            <div className="count">
                                <p> Rs. {total + ".00"}  </p>
                                <p> Rs. {delivery}</p>
                                <p> Rs. {finalPrice}</p>
                            </div>
                        </div>
                        {/* <button className="checkTotalBtn">Checkout</button> */}
                    </div>
                </div>
                <div className="checkOutForms">
                    <h2>Checkout</h2>

                    <label htmlFor="name">Full Name:</label>
                    <input type="text" value={fullNames} onChange={(e)=>setFullNames(e.target.value)} id="name" name="name"  required />

                    <label htmlFor="card">Credit / Debit Card Number:</label>
                    <input type="text" value={creditCard} onChange={(e)=>setCreditCard(e.target.value)} id="card" name="card" required />

                    <label htmlFor="exp">Expiration Date:</label>
                    <input type="text" value={expiry} onChange={(e)=>setExpiry(e.target.value)}  id="exp" name="exp" placeholder="MM/YYYY" required />

                    <label htmlFor="cvv">CVV:</label>
                    <input type="text" value={cvv} onChange={(e)=>setCvv(e.target.value)} id="cvv" maxLength="3" name="cvv" required />

                    <label htmlFor="address">Shipping Address:</label>
                    <textarea id="address" value={shipping} onChange={(e)=>setShipping(e.target.value)} name="address" rows="4" required></textarea>
                    <br />
                    <button onClick={checkoutOrder}>Checkout</button>
                </div>
            </header>
            <div className="CheckOutFooter" >
                <Footer />
            </div>
        </>
    )
}

export default CheckOut