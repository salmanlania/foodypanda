import React from 'react'
import '../css/Card.css'

const Card = (props) => {
  const { button, image } = props
  return (
    <div className='cardlist'>
      <div className='container'>
        <img src={image} alt='' />
        <button className='button' >{button}</button>
       
      </div>
    </div>
  )
}

export default Card