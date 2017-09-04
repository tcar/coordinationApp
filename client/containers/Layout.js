import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux'

//ACTIONS
import { getBars, going } from '../actions/barActions'
import {  logout } from '../actions/userActions'

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

   
    
}




render(){


    return(
    <div className = 'container'>
    <Navbar  logout={this.logout} />
    <Searchbar handleChange = {this.handleChange} getBars = {this.getBars} />
    <Display isAuthenticated={this.props.isAuthenticated} going = {this.going} />
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





}

const mapStateToProps = (state)=>{
  return{
    bars:state.bar.bars,
    isAuthenticated: state.user.isAuthenticated
   
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
      }
    
   
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Layout)