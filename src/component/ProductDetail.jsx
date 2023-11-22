import React, { useEffect, useState } from 'react'
import '../css/ProductDetail.css'
import ContactDetail from './ContactDetail.jsx'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getSingleRestaurant } from '../config/Firebase'
import { useParams } from "react-router-dom"
import ProductPage from './DetailCard';
import { addCardToStore } from "../store/Card";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from './Footer.jsx'

const ProductDetail = () => {
    const [restaurantData, setRestaurantData] = useState("")
    const [detail, setDetail] = useState()
    const { restaurants_id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()



    useEffect(() => {
        getDetails(restaurants_id)
    }, [restaurants_id])


    const getDetails = async (restaurants_id) => {

        const resToData = await getSingleRestaurant(restaurants_id)
        setRestaurantData(resToData)
    }
    const { opening_hours } = restaurantData
    const open = []
    for (let key in opening_hours) {
        open.push(`${key}: ${opening_hours[key]}`)
    }

    if (!restaurantData) {
        return <div className='loader'></div>
    }

    const addToCart = (singleItem) => {
        dispatch(addCardToStore(singleItem))
        Swal.fire({
            title: "Your Item Has Been Place",
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
        });
    }

    return (
        <div>
            <br />
            <Tabs className="tabs">
                <TabList className="tabList">
                    <Tab className="Tab">Menu</Tab>
                    <Tab className="Tab">Timings & Contact</Tab>
                </TabList>
                <br />
                <TabPanel>

                    <Tabs>
                        <TabList className="productCategory">
                            {
                                restaurantData ? restaurantData.menu_categories.map((item, index) => {
                                    return (
                                        <Tab key={index}>
                                            <button className='productCategoryButton'>
                                                {item.category_name}
                                                <span className='changing'>|</span>
                                            </button>
                                        </Tab>
                                    )
                                }) : null
                            }
                        </TabList>
                        <div>
                            {
                                restaurantData ? restaurantData.menu_categories.map((item) => {
                                    return (
                                        <TabPanel className='detailCards'>
                                            {item.items.map((singleItem, index) => {
                                                return (
                                                    <>
                                                        <div>
                                                            <ProductPage key={index} image={singleItem.item_image_url} item={singleItem.item} price={singleItem.price}

                                                                onClick={() => addToCart(singleItem)
                                                                }
                                                            />
                                                        </div>

                                                    </>
                                                )

                                            }
                                            )}

                                        </TabPanel>
                                    )
                                }) : <div className='loader'></div>
                            }
                        </div>


                    </Tabs>


                </TabPanel>
                <TabPanel>
                    <div className='last'>
                        <li className='timer'>
                            {open.map(item => <p>{item}</p>)}
                        </li>
                        <li>
                        </li>
                        <ContactDetail
                            className="ContactDetail"
                            image={restaurantData.image_url}
                            restaurant={restaurantData.restaurant_name}
                            city={`City : ${restaurantData.address.city}`}
                            phone={`Phone Number : ${restaurantData.phone}`}
                            postalcode={`Postal Code : ${restaurantData.address.postal_code}`}
                            state={`State : ${restaurantData.address.state}`}
                            street={`Street Address : ${restaurantData.address.street}`}
                        />
                    </div>
                </TabPanel>
            </Tabs>
            <br /><br />
            <Footer />

        </div>
    )
}

export default ProductDetail