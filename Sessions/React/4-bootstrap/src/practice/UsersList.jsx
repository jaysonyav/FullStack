import React, { Component } from 'react'
import data from '../data.json';
import Card from './Card';

export class UsersList extends Component {

    state = {users: data}

    delete(id){
       console.log('Button Clicked');
        let updatedState = this.state.users.filter(user=> user.id.value != id)
        this.setState({users:updatedState})

    }
  render() {
    return (
     <div className='row'>
     <Card user={this.state.users[0]} onDelete={(id)=>this.delete(id)}/>
     <Card user={this.state.users[1]} onDelete={(id)=>this.delete(id)}/>
     <Card user={this.state.users[2]} onDelete={(id)=>this.delete(id)}/>
     <Card user={this.state.users[3]} onDelete={(id)=>this.delete(id)}/>
     <Card user={this.state.users[4]} onDelete={(id)=>this.delete(id)}/>
    
     
     </div>
    )
  }
}

export default UsersList