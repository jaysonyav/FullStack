import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card({src,title,url}) {
  const navigate=useNavigate()

  const handleClick=()=>{
    navigate(`/${url}`)
  } 

  return (
    <div onClick={handleClick}>

      <img src={src} alt='card-img' />
      <h3>{title}</h3>
      <p>{title} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem interdum condimentum.
</p>
    </div>
  )
}

export default Card