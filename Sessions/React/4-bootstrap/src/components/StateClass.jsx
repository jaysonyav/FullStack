import React, { Component } from 'react'

class StateClass extends Component {

    // title="React JS!";
    state = {title:'React JS', show:true}


    clickHandler(){
        this.setState({title:'Text Changed!'})
        // this.title='Text Changed';
        // console.log(this.title);
    }

  render() {
    return (
      <div>
        <h4>{this.state.title}</h4>
        <button onClick={()=>this.clickHandler()}>Change</button>
      </div>
    )
  }
}

export default StateClass