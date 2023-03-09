import React, { Component } from 'react'

class Counter extends Component {

    state={count:0, show:true}

    increase(){
        // this.setState({count:this.state.count+1})
        this.setState((prev)=>({count:prev.count+1}))
    }

    decrease(){
        this.setState((prev)=>({count:prev.count-1}))
    }

    hideIt(){
        this.setState((prev)=>({show:!prev.show}))
    }
  render() {
    return (
      <>
      {this.state.show ? <h4>{this.state.count}</h4> : '' }
        <button onClick={()=>this.increase()}> + </button>
        <button onClick={()=>this.decrease()}> - </button>
        <button onClick={()=>this.hideIt()}> {this.state.show?'Hide':'Show'} </button>
      </>
    )
  }
}

export default Counter