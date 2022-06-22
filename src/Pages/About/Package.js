import React from 'react'
import { FaPlaneDeparture } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';
import { MdPermContactCalendar } from 'react-icons/md';
function Package() {
  return (
   <>
    
<div className='packages'>

<div className='main_div'>

  <div className='single_div'>
    <h1><FaPlaneDeparture/></h1>
    <h3>Airline Tickets</h3>
    <p>You can book flights for all destinations across India or world at the lowest airfares with sastasafar.</p>
  </div>


  <div className='single_div'>
    <h1><BsFillSunFill/></h1>
    <h3>Holiday Package</h3>
    <p>SastaSafar provide a hassle-free holiday packages and opportunity to enjoy holiday at different destination across the world. Your trip can be really exciting with sastasafar amazing tour packages.</p>
  </div>

  <div className='single_div'>
    <h1><MdPermContactCalendar/></h1>
    <h3>24x7 Customer Service</h3>
    <p>Get assistance 24/7 on any kind of travel related query. We are happy to assist you. You can also call us at 08069-335-000</p>
  </div>
</div>
</div>
   </>
  )
}

export default Package