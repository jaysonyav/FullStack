import React, { Component } from 'react'

class EventClassComp extends Component {

    // title= 'React js';

    // constructor(props){
    //     super(props);
    //     this.clickHandler = this.clickHandler.bind(this);
    // }
    clickHandler(timeStamp){

        
        alert(`${timeStamp} button clicked`)
    }
  render() {
    return (

      <>
        {/* //Usig Arrow Functions */}
        {/* <button onClick={()=>{this.clickHandler()}}>Click Me</button> */}
        {/* Using bind */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
        {/* Using Constructor */}
        {/* <button onClick={this.clickHandler}>Click Me</button> */}
        <button onClick={()=>{this.clickHandler(Date.now())}}> Click Me</button>
        </>
    )
  }
}

export default EventClassComp