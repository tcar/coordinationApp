import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';

import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Display from '../components/Display'

export default class Layout extends Component{



render(){
    console.log('hey')
    return(
    <div className = 'container'>
    <Navbar />
    <Searchbar />
    <Display />
    </div>
    )
}

}