import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import Layout from './containers/Layout'
import Login from './containers/Login'

export default class Routes extends Component{




render(){
    return(
        <Router>
            <div className='background'>
            <switch>
            <Route exact path="/" component={Layout}/>
            <Route exact path="/login/:token" component={Login}/>
            <Redirect  exact from="/login/:token" to="/"/>
            </switch>
            </div>
        </Router>
        )
    }

}