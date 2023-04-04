import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <header className='Navbar'>
        <h1 className='Header'>Clarusway It School <span className='HeaderSpan'>Web Design</span></h1>
        <div className='NavMenu'>
            <Link className='NavLink' to='/'>Home</Link>
            <Link className='NavLink' to='/about'>About</Link>
            <Link className='NavLink' to='/services'>Services</Link>
        </div>
    </header>
  )
}

export default Navbar