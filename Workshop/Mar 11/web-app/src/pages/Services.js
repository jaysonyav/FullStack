import React from 'react'
import Subscribe from '../components/Subscribe'

function Services() {
  return (
    <div>
      <Subscribe/>
      <div>
        <h3>Services</h3>
        <div className='services-sec'>
          <h4>Website Design</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies at, vulputate id lorem. Nulla facilisi.</p>
          <p>Pricing: $1,000 - $3,000</p>
        </div>
        <div className='services-sec'>
          <h4>Website Maintenance</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies at, vulputate id lorem. Nulla facilisi.</p>
          <p>Pricing: $250 per month</p>
        </div>
        <div className='services-sec'>
          <h4>Website Hosting</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies at, vulputate id lorem. Nulla facilisi.</p>
          <p>Pricing: $25 per month</p>
        </div>
      </div>
      <div>
        <form>
        <label>Name
          <input type='text' id='name'  name='name'/>
         </label>
         <label>Email
          <input type='email' id='email'  name='email'/>
         </label>
         <label> Message
          <input type='text' id='message'  name='message'/>
         </label>
          <button type='submit'>Send</button>

        </form>
      </div>
    </div>
  )
}

export default Services