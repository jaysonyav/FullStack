import React, { Component } from 'react'

 class Footer extends Component {
  render() {
    return (
      <div className='p-2 bg-dark text-light text-center'>
        <h6> Copy Rights &copy; {this.props.year}</h6>
      </div>
    )
  }
}

export default Footer