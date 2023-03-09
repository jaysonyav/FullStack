import React from 'react'

function AddEvents() {
    function clickHandler(timeStamp){
        console.log('Button Clicked!');
        alert(`${timeStamp} Button clicked`)
    }

function inputHandler(){
    console.log('USer Input!');
} 
  return (
   <>
    <input type='text' onChange={inputHandler}/><br/> 
    <button onClick={()=>{clickHandler(Date.now())}}>Click Me</button>

    <div style={{width:'500px',height:'300px',background:'lightblue'}}>
        Hover Over Me
    </div>
   </>
  )
}

export default AddEvents