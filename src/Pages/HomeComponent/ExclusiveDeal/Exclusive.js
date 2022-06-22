import React, { useState } from 'react'
import './Exclusive.css'
import DealData from '../DealComponent/DealData'
function Exclusive() {
 const [item,setItem] =  useState(DealData)
  return (
    <>
        <div className='exclusive'>
        <div className='heading'> 
            <h1>Exclusive Deals</h1>
            </div>

<div className='grid_div'>

   {
    item.map((itemVal)=>{
        return(
            <>
            <div className='image' key={itemVal.id}>
<img src={itemVal.pic} alt='dubai'/>
<div className='details'>
        <h3>{itemVal.location}</h3>
        <p>{itemVal.price}</p>
    </div>
    </div>
            </>
        )
    })
   }

</div>

        </div>
    </>
  )
}

export default Exclusive