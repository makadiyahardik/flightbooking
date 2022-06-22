import React from 'react'
import {Link} from 'react-router-dom'
function FlightFooter() {
  return (
   <>
     <div className='footer_section'>
        <div className='main_footer'>
          <div className='single_footer'>
            <ul>
            <h3>Call Us</h3>
              <li className='li_list'>08069-335-000</li>
              <li className='li_list'>+91 9999-331-771</li>
              <br/>
              <h3>Email</h3>
              <li className='li_list'> support@travelsees.com</li>
            </ul>
           </div>


           <div className='single_footer'>
            <ul>
            <h2>Book Now</h2>
            <Link to="/">
           <li>Home</li>
           </Link>
              <Link to='/'>Flight</Link>
              <li>My Trips</li>
            </ul>
           </div>



           <div className='single_footer'>
            <ul>
            <h2>Support</h2>
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
           </div>



           <div className='single_footer'>
            <ul>
            <h2>Pay Safely With Us</h2>
              <li>The payment is encrypted and transmitted securely with an SSL protocol.</li>
              <img src='./images/creditcards.png' alt='creditcards'/>
             
            </ul>
           </div>


        </div>
      </div>
   </>
  )
}

export default FlightFooter