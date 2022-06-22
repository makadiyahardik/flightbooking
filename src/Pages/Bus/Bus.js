import React, { useState } from 'react'
import './Bus.css'
import Footer from '../../Components/Footer/Footer';
import { MdLocationPin } from "react-icons/md";
import BusSafety from '../Bus/BusSafety'

import AutoPlayMethods from './Carousel';
function Bus() {
    const [Flocation,setFlocation]=useState('')
    const [Slocation,setSlocation]=useState('')
    const [dateOne,setDate]=useState('')
    const [item,setItem] = useState(BusSafety)

function getBus(){
    if(Flocation===""){
        alert("Entre Your Starting Point")
    }
    if(Slocation===""){
        alert("Entre Your Ending Point")
    }
    if(dateOne===""){
        alert("Entre Your Journey Date")
    }
    if(Flocation !== "" && Slocation !== "" && dateOne !== ""){
        alert("oooops Sorry ! Bus is Not Available for this route")
    }
    setFlocation("")
    setSlocation("")
    setDate("")
}
  return (
    <>
        <div className='bus_section'>
            <div className='busstand'>
                <img src='/images/bus.png' alt='busstand'/>
                <h1>Bus Search</h1>
                <div className='text_bus'>
             <input  type="text" placeholder='From'  value={Flocation} onChange={(e)=>setFlocation(e.target.value)}/> 
                    <input type="text" placeholder='To' value={Slocation} onChange={(e)=>setSlocation(e.target.value)}/>   
                    <input type="date" value={dateOne} onChange={(e)=>setDate(e.target.value)}/>
                    <button onClick={getBus}>Search</button>
                </div>
            </div>
        

        
    </div>
  
    <div className='safety_section'>
   <h1>Z+ Safety</h1>
        <div className='safety_maindiv'>
       
      
         {
            item.map((curElm)=>{
                return(
                    <>
                    <div className='safety_card' key={curElm.id}>
                <h3>{curElm.titile}</h3>
                <p>{curElm.desc}</p>
            </div>
                    </>
                )
            })
         }
          
        </div>
    </div>




<AutoPlayMethods/>
<Footer/>
    </>
  )
}

export default Bus