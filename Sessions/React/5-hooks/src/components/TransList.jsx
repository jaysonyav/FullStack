import React from 'react'
import TransItem from './TransItem'

const TransList = ({transactions}) => {
  return (
    <>
    {transactions.map(trans=><TransItem transaction={trans} key={trans.id}/>)}
    </>
  )
}

export default TransList