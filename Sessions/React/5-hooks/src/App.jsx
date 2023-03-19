import { useState } from "react";
import TransactionDate from "./components/Date/TransactionDate";
import Header from "./components/Header";

const dummyTransactions = [
  {name:'Starbucks',
   price:'4.50',
   expense:true,
   date:new Date('2/21/2023')
  },
  {name:'Bought a jacket',
   price:'150.75',
   expense:true,
   date:new Date('2/20/2023')
  },
  {name:'Paycheck',
   price:'1500',
   expense:false,
   date:new Date('2/01/2023')
  }
]

function App() {

  const [transaction, setTransactation]= useState(dummyTransactions)
  return (
    <>
    <Header/>
    <div className="container">
        
        <div className=" d-flex justify-content-between m-3 p-3">
        <div className="d-flex gap-3 align-itmes-center">
          <TransactionDate date={transaction[0].date}/>
          <h4>{transaction[0].name}</h4>
        </div>
          <div className="py-2 px-4 bg-danger rounded-5">
          {transaction[0].price}
          </div>
        </div>
        
    </div>
    </>
  );
}

export default App;
