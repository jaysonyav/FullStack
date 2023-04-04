import React from 'react'
import Card from '../components/Card'
import cssPhoto from '../assets/images/logo_css.png'
import HtmlPhoto from '../assets/images/logo_html.png'
import LogoPhoto from '../assets/images/logo_brush.png'
import Subscribe from '../components/Subscribe'

function Home() {
  return (
    <main>
        <div className='Banner'>
            <h1> Professional Web Design</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem interdum condimentum.</p>
        </div>
        <Subscribe/>
        <div className='cards'>
            <Card src={HtmlPhoto} title='HTML5 Markup' url='html' />
            <Card src={cssPhoto} title='CSS3 Styling' url='css'/>
            <Card src={LogoPhoto} title='Graphic Design' url='logo'/>
        </div>
    </main>
  )
}

export default Home