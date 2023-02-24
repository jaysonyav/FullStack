import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div style={this.props.css}>
        <h3>{this.props.title}</h3>
      </div>
    )
  }
}

export default Header