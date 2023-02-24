import React from 'react'

const Card = ({title,icon,color}) => {
  return (
    <div className="card card-body shadow my-5 text-center">
        <div className='card-title'>{title}</div>
        <i className={icon} style={{fontSize:'48px', color: color}}></i>
    </div>
  )
}

export default Card