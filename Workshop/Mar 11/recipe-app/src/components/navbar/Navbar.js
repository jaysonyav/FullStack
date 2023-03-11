import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate=useNavigate();
  return (
    <div>
        <h1 onClick={()=>{navigate('/home')}} className='title'>{'<CLARUSWAY>'}<span className='secondtitle' >RECIPE</span></h1>
        <div className='NavMenu'>
            <Link className='NavLink' to='/about'>ABOUT</Link>
            <a href='https://recipe-app-solution.vercel.app/'>GITHUB</a>
            <Link className='NavLink' to='/'>LOGOUT</Link>
        </div>

    </div>
  )
}

export default Navbar