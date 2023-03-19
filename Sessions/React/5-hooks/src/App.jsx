import { useState } from "react";
import AddSection from "./components/AddSection";
import Header from "./components/Header";
import TransList from "./components/TransList";


const dummyTransactions = [
  {
    id:1,
    name: "Starbucks",
    price: "4.50",
    expense: true,
    date: new Date("2/21/2023"),
  },
  {
    id:2,
    name: "Bought a jacket",
    price: "150.75",
    expense: true,
    date: new Date("2/20/2023"),
  },
  {
    id:3,
    name: "Paycheck",
    price: "1500",
    expense: false,
    date: new Date("2/01/2023"),
  },
];

function App() {
  const [transactions, setTransactations] = useState(dummyTransactions);
  const [show, setShow]=useState(false);

  const toggleShow=()=>{
    setShow(!show)
  }
  return (
    <>
      <Header toggleShow={toggleShow} />
      
      <div className="container">
        {show&&<AddSection/>}
        <TransList transactions={transactions}/>
      </div>
    </>
  );
}

export default App;
