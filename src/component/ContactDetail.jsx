import React from 'react'
import '../css/ContactDetail.css'

const ContactDetail = (props) => {
  const { restaurant, city, phone, postalcode, state, street ,image } = props
  return (
    <div>
      <div className='ContactDetail'>
        <img src={image} alt="" />
        <h2>Restaurant Name : {restaurant}</h2>
        <li>{city}</li>
        <li>{phone}</li>
        <li>{postalcode}</li>
        <li>{state}</li>
        <li>{street}</li>
      </div>
    </div>
  )
}

export default ContactDetail