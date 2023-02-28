import React from 'react'
import Child2 from './Child2'

function Child1(props) {
  return (
    <Child2 ccc={props.abc}/>
  )
}

export default Child1