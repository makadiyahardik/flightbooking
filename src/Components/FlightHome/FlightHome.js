import React from 'react'
import './FlighHome.css'
function FlightHome() {
  return (
    <>
        <div className='homes'>
<img src='./images/home-bg.jpg' alt='' />


<div className='text_areas'>
    <div className='texts'>
        
       <div className='radiobtns'>
      
       <input type="radio" name='gender'/> Round Trip
        <input type="radio" name='gender'/> One Way
       </div>
        <br></br>
      <div className='searchbtns'>
      <input type="search"  placeholder='From'/> <br/>
        <input type="search"  placeholder='To'/><br/>
       
      </div>
      <div className='dates'>
      <input type="date"  placeholder='search here' className='date1'/>
        <input type="date"  placeholder='search here' className='date1'/>
      </div>
      <div className='dropdowns'> 
      <select>
            <option>Adult <span><button></button></span></option>
            <option>Child</option>
            <option>Infant</option>
        </select>
        <button>Search</button>
        <br/> </div>
    
        <br/>
      
    
    </div>
</div>
</div>
    </>
  )
}

export default FlightHome