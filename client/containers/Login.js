import React, {Component} from 'react'
import { connect } from 'react-redux'

import { login } from '../actions/userActions'
import { getBars} from '../actions/barActions'
class Login extends Component{

componentWillMount(){
    this.props.login(this.props.match.params.token)
    this.props.getBars({location:localStorage.getItem('location')})
}


render(){
    return(
        <div></div>
    )
}


}


const mapStateToProps = (state)=>{
    return {

    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        login:(user)=>{
            dispatch(login(user))
        },
         getBars:(location)=>{
        dispatch(getBars(location))
      },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)