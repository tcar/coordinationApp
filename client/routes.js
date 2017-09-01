import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Layout from './containers/Layout'

export default class Routes extends Component{

render(){
    return(
        <Router>
            <div className='background'>
            <Route exact path="/" component={Layout}/>
            </div>
        </Router>
        )
    }

}