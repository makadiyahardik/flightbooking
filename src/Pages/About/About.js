import React from 'react'
import EndFooter from '../../Components/EndFooter/EndFooter'
import './About.css'
import Mission from './Mission';
import Service from './Service';
import Package from './Package';

import AboutMain from './AboutMain';
import Header from '../../Components/Header/Header';


function About() {

  return (
    <>
  
       <AboutMain/>
<Mission/>
<Service/>
<Package/>

        {/* <Footer/> */}
        <EndFooter/>
    </>
  )
}

export default About