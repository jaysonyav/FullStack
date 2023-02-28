import React from 'react'

function Child2(props) {
    const myStyle={color:props.ccc || "blue"}
  return (
    <div style={myStyle}>lorem
    
    </div>
  )
}

export default Child2