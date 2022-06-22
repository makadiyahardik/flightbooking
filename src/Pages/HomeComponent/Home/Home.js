import React,{useState} from 'react'


import DealData from '../DealComponent/DealData'
import {Link} from 'react-router-dom'
import './Home.css'
import Footer from '../../../Components/Footer/Footer'
import EndFooter from '../../../Components/EndFooter/EndFooter'

function Home() {
  const [item,setItem] =  useState(DealData)
const [round,setRound]=useState(false)
const [oneWay,setOneWay]=useState(false)
const [show,setShow]= useState()
const [loc1,setStartLoc]=useState()
const [loc2,setStartLoc2]=useState()
const [dateOne,setDateOne]=useState()
const [dateTwo,setDatetwo]=useState()
const [select,setSelect]=useState()


function getFlight(){
  if(loc1==="")
{
  alert("Entre your location")
}
if(loc2==="")
{
  alert("Entre your location")
}  

if(dateOne==="")
{
  alert("Entre your date")
}    
if(select===""){
  alert("select")
} 
if(loc1 !=="" && loc2 !== "" && dateOne !==""){
  alert("congratutaions your flight hase been successfully booked ")
}
setStartLoc("")
setStartLoc2("")
setDateOne("")
setDatetwo("")
}



function setRound1(e){
setRound(e.target.value)
if(round===true){
  console.log("round");
  setOneWay(false)
}
}

function setOneWay1(e){
  setOneWay(e.target.value)
  setRound(true)
  console.log("oneWay");
  }
  return (
   <>
   
<div className='home' id='Home'>
<img src='./images/home-bg.jpg' alt='' />


<div className='text_area'>
    <div className='text'>
        
       <div className='radiobtn'>
      
       <input type="radio" name='gender'  value=" Round Trip" onChange={setRound1} /> Round Trip
        <input type="radio" name='gender' value="One Way"  onChange={setOneWay1}/> One Way
       </div>
        <br></br>
      <div className='searchbtn'>
      <input type="location"  placeholder='From' value={loc1} onChange={(e)=>setStartLoc(e.target.value)}/>
        <input type="location"  placeholder='To'    value={loc2} onChange={(e)=>setStartLoc2(e.target.value)}/>

 

      </div>
      <div className='main'>
        <input type="date"  placeholder='search here' className='date1' value={dateOne} onChange={(e)=>setDateOne(e.target.value)}/>
    

{
  round === true ? <input type="date"  placeholder='search here' className='date1'  value={dateTwo} onChange={(e)=>setDatetwo(e.target.value)}/>   :  <button className='btn' onClick={()=>setShow(!show)}> {show ?  "- Remove Return date" : " + Add Return date "}</button>
}
{
  show && <input type="date"  placeholder='search here' className='date1'  value={dateTwo} onChange={(e)=>setDatetwo(e.target.value)} />
}
</div>
      <div className='dropdown'> 
      <select  value={select} onChange={(e)=>setSelect(e.target.value)}>
            <option value="Adult">Adult</option>
            <option value="Child">Child</option>
            <option value="infant">Infant</option>
        </select>
        <button onClick={getFlight}>Search</button>
        <br/> </div>
    
        <br/>
      
    
    </div>
</div>
</div>

{/* DEAL COMPONENT START */}
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

{/* DEAL COMPONENT end */}

{/* Exclusive COMPONENT START */}
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
{/* Exclusive COMPONENT end */}


{/* FOOTER COMPONENT START */}

<Footer/>
{/* FOOTER COMPONENT END */}



{/* ENDFOOTER COMPONENT START */}
<EndFooter/>
{/* ENDFOOTER COMPONENT end */}
   </>
  )
}

export default Home