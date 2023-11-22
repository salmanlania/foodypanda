import React from 'react'
import '../css/RestoCard.css'

const RestoCard = (props) => {
    const { image_url, restaurant_name, cuisine_type, city = 'Karachi' } = props.data
    // const { restaurant_name, cuisine_type , image_url} = props.data

    return (
        <div>
             <div className='card'>
                <div className="cards"
                 onClick={props.onClick}
                >
                   
                    <img src={image_url} alt="" />
                    <h3>{restaurant_name}</h3>
                    <span className='oneLine'>
                        <h4>{cuisine_type}</h4>
                        <h4>{city}</h4>
                    </span>
                </div> 
            </div>
            {/* <div
            onClick={props.onClick}
            style={{ color: 'black', height: 300, width: 300, border: '1px solid black', background: 'white', boxShadow: 'black 7px 13px 17px -2px', margin: 5 }}>

            <img width='80' alt='' src={image_url} />

            <h3>{restaurant_name}</h3>
            <h5>{cuisine_type}</h5>
            </div>  */}
        </div >
    )
}

export default RestoCard