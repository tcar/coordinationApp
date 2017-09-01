import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux'

//ACTIONS
import { getBars } from '../actions/barActions'

//COMPONENTS

import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Display from '../components/Display'

 class Layout extends Component{
constructor(){
    super()
    this.state={
        location:''
    }
    this.getBars = this.getBars.bind(this)
    this.handleChange = this.handleChange.bind(this)
}

render(){
    return(
    <div className = 'container'>
    <Navbar />
    <Searchbar handleChange = {this.handleChange} getBars = {this.getBars} />
    <Display />
    </div>
    )
}

//FUNCTIONS

handleChange(){
const location = document.getElementById('barSearch').value
this.setState({location:location})
}

getBars(){
    this.props.getBars(this.state.location)
}




}

const mapStateToProps = (state)=>{
  return{
    bars:state.bar.bars
  
  }
}

const mapDispatchToProps = (dispatch)=>{
    return{
      getBars:(location)=>{
        dispatch(getBars(location))
      }
     
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Layout)