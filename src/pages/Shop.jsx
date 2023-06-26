import React from 'react'
import BoatCard from '../components/BoatCard'
import { BOATDATA } from '../boatData.js'
import '../styles/Shop.css'

export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'> 
          <h1> Boat Inventory </h1>
        </div>
        <div className='boat-deck'>
          <div className='boat'>
            {BOATDATA.map(boat => ( <BoatCard data={boat} /> ))}
          </div>
        </div>
    </div>
  )
}
