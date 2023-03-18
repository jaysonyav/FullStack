import { Component } from 'react'

export class Counter extends Component {
  
  
    state={counter:0, show:true, input:''}

    incHandler(){
        this.setState({counter:this.state.counter+1})
    }
   decHandler(){
        this.setState({counter:this.state.counter-1})
    }
    toggleShowHandler(){
        // this.setState((prev)=>({show:!prev.show}))
        this.setState({show:!(this.state.show)})
    }

    inputHandler(e){
        this.setState({input:e.target.value})
    }
    addValue(){
        this.setState({counter:this.state.counter+Number(this.state.input)})
        this.setState({input:''})
    }
    render() {
    return (
      <div className='container mt-5'>

        {this.state.show &&
        <div className="card mx-auto w-25 card-body text-center fw-bold">
        {this.state.counter}
        <input type="text" className="form-control w-100 text-center" 
        onChange={(e)=>this.inputHandler(e)} 
        value={this.state.input}/>
        </div>
        }


        <div className="w-50 mx-auto d-flex justify-content-between mt-5">
            <button className="btn btn-primary" onClick={()=>{this.incHandler()}}>+</button>
            <button className="btn btn-primary" onClick={()=>{this.toggleShowHandler()}}>
                {this.state.show? 'Hide':'Show'}
            </button>
            <button className="btn btn-primary" onClick={()=>{this.decHandler()}}>-</button>
            <button className='btn btn-primary' onClick={()=>{this.addValue()}}>Add Input Value</button>
        </div>
      </div>
    )
  }
}

export default Counter