import React from 'react'
import TransactionDate from './Date/TransactionDate'

const TransItem = ({transaction}) => {
  return (
    <div className="border border-1 d-flex justify-content-between m-3 p-3 align-items-center">
          <div className="d-flex gap-3 align-itmes-center">
           <TransactionDate date={transaction.date}/>
            <h4>{transaction.name}</h4>
          </div>
          <div className={`py-2 px-4 ${transaction.expense?'bg-danger' :'bg-success'} rounded-3 text-light`}>
          {transaction.expense?'-' :'+'} ${transaction.price}
          </div>
        </div>
  )
}

export default TransItem