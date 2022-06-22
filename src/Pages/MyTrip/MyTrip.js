import React, { useState } from 'react'
import './MyTrip.css'
import Footer from '../../Components/Footer/Footer'
import EndFooter from '../../Components/EndFooter/EndFooter'
function MyTrip() {
const [bookingId,setbookingId]= useState()
const [mail,setMail]=useState()

function showTrip(){
  if(bookingId===""){
alert ("Entre your bookingID")
  }
  if(mail===""){
    alert("Entre your mail")
  }
  if(bookingId !== "" && mail !== ""){
    alert("ooops! You have not booked yet")
  }
  setbookingId("")
  setMail("")
}
  return (
 <>
   
    <div className='mytrip'>

    <div className='mytrip_booking'>


    <div className='heading_booking'>
      <h3>View Your Reservation</h3>
      <p>(As a Guest User)</p>
    </div>
<div className='booking'>
  <label>Booking ID</label><br/>
  <input type="text" value={bookingId} onChange={(e)=>setbookingId(e.target.value)} /><br/>
  <label>E-mail</label><br/>
  <input type="email"  value={mail} onChange={(e)=>setMail(e.target.value)}/><br/>
<div className='button_group'>
<button onClick={showTrip}>Show My Booking</button>

</div>
</div>
 </div>
    </div>
    <Footer/>
    <EndFooter/>
 </>
  )
}

export default MyTrip