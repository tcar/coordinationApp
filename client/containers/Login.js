import React, {Component} from 'react'
import { connect } from 'react-redux'

import { login } from '../actions/userActions'

class Login extends Component{

componentWillMount(){
    localStorage.setItem('token',this.props.match.params.token)
    this.props.login()
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
        login:()=>{
            dispatch(login())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)