import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/About'
import Details from '../pages/details/Details'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Notfound from '../pages/Notfound/Notfound'


function AppRouter() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/details' element={<Details/>}/>
            <Route path='*' element={<Notfound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter