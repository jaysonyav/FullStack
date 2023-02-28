import React from 'react'
import Child1 from './Child1'

function Parent() {

    const color = 'green';
  return (
    <Child1 abc={color}/>
  )
}

export default Parent