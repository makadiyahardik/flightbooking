import React from 'react'
import { useParams } from 'react-router-dom'

function AboutMain() {
    const {name}=useParams()
  return (
   <>
 <div className='about' id='About'>
            <div className='left_about'>
<h1>About us</h1>
<p>Travelsees is based in Delhi, India and one of India's leading online travel companies and operates the website sastasafar.com. The company provides information, pricing, availability, and booking facility for domestic and international air travel.</p>
            </div>
            <div className='right_about'>
<img src='/images/aboutus.png' alt='aboutus'/>
            </div>
        </div>
   </>
  )
}

export default AboutMain