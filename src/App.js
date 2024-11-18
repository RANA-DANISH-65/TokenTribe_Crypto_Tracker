import React from 'react'
import Navbar from './Components/Navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home'
import Coin from './Pages/Coin/coin'
import Footor from './Components/Footor'


const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
      <Footor/>
    </div>
  )
}

export default App