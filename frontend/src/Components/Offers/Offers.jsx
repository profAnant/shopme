import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/extra.png'

const Offers=()=>{
    return (
        <div className='offers'>
            <div className='offersleft'>
                <h1> Exclusive</h1>
                <h1> Offers for You</h1>
                <p> Only On Best seller Products</p>
                <button>Check now</button>
            </div>
            <div className='offersright'>
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}
export default Offers