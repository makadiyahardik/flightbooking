import React from 'react'
import './Deal.css'
function Deal() {
  return (
  <>
    <div className='deal'>
      <div className='google_image'>
        <img src='./images/google.png' alt='google'/>
        <h3>Reasons to book with us?</h3>
      </div>


<div className='booking_reasons'>
    <div className='single_div'>
    <img src='./images/fastT.png' alt='fasT'/>
  <div className='text_booking'>
        <h4>FAST BOOKING</h4>
        <p>We offer fast booking, fantastic products competitive pricing & amazing experience.</p>
        </div>
    </div>
    <div className='single_div'>
    <img src='./images/eDeal.png' alt='fasT'/>
  <div className='text_booking'>
        <h4>
EXCITING DEALS</h4>
        <p>Book exciting deals on with published & exclusive flights.</p>
        </div>
    </div>
    <div className='single_div'>
    <img src='./images/24Support.png' alt='fasT' className='support'/>
  <div className='text_booking'>
        <h4>24/7 SUPPORT</h4>
        <p>Get assitance 24/7 on any kind of travel related query. We are happy to assit you..</p>
        </div>
    </div>
</div>


    </div>
  </>
  )
}

export default Deal