import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <>
        <div className='header' id='Header'>

<div className='logo'>
<img src='/images/sastasafar_logo.png' alt='logo'/>
</div>
<div className='links'>
    <Link to='/' >Home</Link>
    <Link to='/Flight' >Flight</Link>
    <Link to='/Bus' >Bus</Link>

    <Link to='/MyTrip' >My Trips</Link>
    


</div>

        </div>
    </>
  )
}

export default Header