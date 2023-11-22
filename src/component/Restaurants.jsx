import React, { useEffect, useState } from 'react'
import RestoCard from './RestoCard'
import { getData } from '../config/Firebase'
import '../css/Restaurant.css'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const Restaurants = () => {
  const navigate = useNavigate()
  const [res, setRes] = useState([])
  useEffect(() => {
    getAds()


  }, [])

  const getAds = async () => {
    const adsData = await getData()
    setRes(adsData)
  }

  if (!res.length) {
    return <div className='loader' ></div>
  }
  return (
    <header>
      <div className='resto'>
        {
          res.map(item => {
            return (
              <div>
                <RestoCard
                  data={item}
                  onClick={() => navigate(`/restaurants/${item.id}`)}
                   />
                <RestoCard
                  data={item}
                  onClick={() => navigate(`/restaurants/${item.id}`)}
                   />
                <RestoCard
                  data={item}
                  onClick={() => navigate(`/restaurants/${item.id}`)}
                   />
              </div>
            )
          })
        }
      </div>
      <br /><br />
      <Footer />
    </header>
  )
}

export default Restaurants