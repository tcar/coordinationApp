import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from './containers/Layout'
import Login from './containers/Login'

 class Routes extends Component{




render(){
    

    return(
        <Router>
            <div >
            <switch>
            <Route exact path="/" component={Layout}/>
            <Route exact path="/login/:token" render={() => (
                this.props.isAuthenticated ? 
                (
                    <Redirect to="/"/>
                ) : (
                 <Login/>
                    )
                    )}/>
            
            </switch>
            </div>
        </Router>
        )
    }

}


const mapStateToProps = (state)=>{
    return {
        isAuthenticated:state.user.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
    


    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Routes)