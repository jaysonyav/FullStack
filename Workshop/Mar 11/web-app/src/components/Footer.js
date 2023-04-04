import React from 'react'
import FooterLogo from '../assets/images/clarusway_logo.png'

function Footer() {
  return (
    <footer className='footer'>
        <p>Clarusway Web Design, Copyright &copy; 2020</p>
        <img src={FooterLogo} alt='footer-logo'/>
    </footer>
  )
}

export default Footer