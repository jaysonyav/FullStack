import React from 'react'

function AddEvents() {
    function clickHandler(timeStamp){
        console.log('Button Clicked!');
        alert(`${timeStamp} Button clicked`)
    }

function inputHandler(){
    console.log('User Input!');
} 

function blurHandler(){
    console.log('User Blured Away');
}

function mouseIn(){
    alert('Mouse Entered the DIV');
}
function mouseOut(){
    alert('Mouse left from the DIV');
}
  return (
   <>
    <input type='text' onChange={inputHandler} onBlur={blurHandler}/><br/> 
    <button onClick={()=>{clickHandler(Date.now())}}>Click Me</button>

    <div onMouseEnter={mouseIn} onMouseLeave={mouseOut}
    style={{width:'500px',height:'300px',background:'lightblue'}}>
        Hover Over Me
    </div>
   </>
  )
}

export default AddEvents