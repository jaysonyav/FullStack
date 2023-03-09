import React, { Component } from "react";

class EventObject extends Component {

    clickHandler(e){
        console.log(e);
        console.log(this);
    }

    inputHandler(e){
        console.log(e.target.value);

    }

    submitHandler(event){
        event.preventDefault();
        console.log('Form Submitted');
    }
  render() {
    return (
      <>

      <form onSubmit={(e)=>this.submitHandler(e)}>
        <input type="text" onChange={(e)=>this.inputHandler(e)}/>
        <br />
        <button onClick={(event)=>this.clickHandler(event)} type="button"> Click Me</button>
      <button type="submit">Submit</button>
      </form>
      </>
    );
  }
}

export default EventObject;
