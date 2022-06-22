
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';

import Deal from './Pages/HomeComponent/DealComponent/Deal'

import Exclusive from './Pages/HomeComponent/ExclusiveDeal/Exclusive'

import Home from  './Pages/HomeComponent/Home/Home'
import Flight from './Pages/FlightComponent/Flight';
import About from './Pages/About/About'
import Bus from './Pages/Bus/Bus';
import MyTrip from './/Pages/MyTrip/MyTrip'

function App() {
  return (
<>
<Header/>

<Routes>
<Route exact path='/' element={<Home/>}/>
<Route  path='/Bus' element={<Bus/>}/>
  <Route  path='/Flight' element={<Flight/>}/>
  <Route  path='/MyTrip' element={<MyTrip/>}/>
  <Route  path='/About/:Company' element={<About/>}/>


</Routes>





</>
  );
}

export default App;
