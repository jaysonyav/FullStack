import {useState} from 'react'

function CounterFunc() {

    const [counter, setCounter]=useState(0);
    const [show,setShow] =useState(true);
    const [input, setInput] = useState('');

    const inputHandler=(e)=>{
        setInput(e.target.value)
    }

    const incHandler=()=>{
        setCounter(counter+1)
    }
    const decHandler=()=>{
        setCounter(counter-1)
    }
    const toggleShowHandler=()=>{
        setShow(!show)
    }
    const addValue=()=>{
        setCounter(counter+Number(input))
        setInput('')
    }

      return (
    <div className='container mt-5'>

      {show &&
      <div className="card mx-auto w-25 card-body text-center fw-bold">
      {counter}
      <input type="text" className="form-control w-100 text-center" 
      onChange={(e)=>inputHandler(e)} 
      value={input}/>
      </div>
      }


      <div className="w-50 mx-auto d-flex justify-content-between mt-5">
          <button className="btn btn-primary" onClick={()=>{incHandler()}}>+</button>
          <button className="btn btn-primary" onClick={()=>{toggleShowHandler()}}>
              {show? 'Hide':'Show'}
          </button>
          <button className="btn btn-primary" onClick={()=>{decHandler()}}>-</button>
          <button className='btn btn-primary' onClick={()=>{addValue()}}>Add Input Value</button>
      </div>
    </div>
  )
}

export default CounterFunc