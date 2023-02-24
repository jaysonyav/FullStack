import React from 'react'
import Card from './Card'

const Services = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <Card title='Reserve' icon='fa-solid fa-calendar-check' color='blue'/>
            </div>
            <div className='col-md-4'>
                <Card title='Tour' icon='fa-solid fa-ship' color='blue'/>
            </div>
            <div className='col-md-4'>
                <Card title='Info' icon='fa-solid fa-circle-info' color='blue'/>
            </div>
        </div>

    </div>
  )
}

export default Services