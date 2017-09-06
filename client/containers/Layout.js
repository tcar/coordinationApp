import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux'

//ACTIONS
import { getBars,} from '../actions/barActions'
import {  logout, going, getUsers } from '../actions/userActions'

//COMPONENTS

import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Display from '../components/Display'

 class Layout extends Component{
constructor(){
    super()
    this.state={
        location:{}
    }
    this.getBars = this.getBars.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.logout = this.logout.bind(this)
    this.going = this.going.bind(this) 
    this.getUsers = this.getUsers.bind(this)   

   
    
}


componentWillMount(){
    this.props.getUsers()
}

render(){

    return(
    <div className = 'container'>
    <Navbar user = {this.props.user} isAuthenticated={this.props.isAuthenticated} logout={this.logout} />
    <Searchbar handleChange = {this.handleChange} getBars = {this.getBars} />
    <Display fetching={this.props.fetching} getUsers={this.getUsers} users = {this.props.users} barsGoing={this.props.barsGoing} barsGoing={this.props.barsGoing} bars={this.props.bars} isAuthenticated={this.props.isAuthenticated} going = {this.going} />
    </div>
    )
}

//FUNCTIONS

handleChange(){
 const location = {
                  location: document.getElementById('barSearch').value
              }
              this.setState({location:location})
}

getBars(){
    this.props.getBars(this.state.location)

}

logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('info')
    this.props.logout()
}


going(id){
    this.props.going(id)
}

getUsers(){
    this.props.getUsers()
}




}

const mapStateToProps = (state)=>{
  return{
    bars:state.bar.bars,
    isAuthenticated: state.user.isAuthenticated,
    barsGoing:state.bar.barsGoing,
    barsGoing:state.user.bars,
    users:state.user.users,
    user:state.user.user,
    fetching:state.bar.fetchBars
    
  
   
  }
}

const mapDispatchToProps = (dispatch)=>{
    return{
      getBars:(location)=>{
        dispatch(getBars(location))
      },
  
      logout:()=>{
          dispatch(logout())
      },
      going:(id)=>{
          dispatch(going(id))
      },
       getUsers:()=>{
          dispatch(getUsers())
      },
 
    
   
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Layout)