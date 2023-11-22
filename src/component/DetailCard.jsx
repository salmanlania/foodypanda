import React from 'react'
import '../css/DetailCard.css'

const DetailCard = (props) => {
	const {image , item , price , button} = props
	return (
		<div className='ProductPage'>
			<div class="card_container">
				<div class="card_header">
					<img src={image} alt="" class="card_image" />
					
				</div>
				<div class="card_body">
					<p className='title'>{item}</p>
					<p class="price">Rs. {price}</p>
				</div>
				<div class="card_footer">
					<button onClick={props.onClick}>Add To Cart</button>
				</div>
			</div>
		</div>
		// <div className='ProductPage'>
		// 	<div class="card_container">
		// 		<div class="card_header">
		// 			<img src={image} alt="" class="card_image" />
					
		// 		</div>
		// 		<div class="card_body">
		// 			<p className='title'>{title}</p>
		// 			<p class="price">Price:&#8377; {price}</p>
		// 		</div>
		// 		<div class="card_footer">
		// 			<button>{button}</button>
		// 		</div>
		// 	</div>
		// </div>
	)
}

export default DetailCard