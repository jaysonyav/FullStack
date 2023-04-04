import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import Services from '../pages/Services'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Css from '../pages/Css'
import Logo from '../pages/Logo'
import Html from '../pages/Html'

function AppRouter() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/css' element={<Css/>}/>
            <Route path='/logo' element={<Logo/>}/>
            <Route path='/html' element={<Html/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter