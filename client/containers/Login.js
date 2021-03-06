import React, {Component} from 'react'
import { connect } from 'react-redux'

import { login, getUser } from '../actions/userActions'
import { getBars} from '../actions/barActions'
class Login extends Component{

componentWillMount(){

    this.props.getBars({location:localStorage.getItem('location')})
    this.props.getUser()
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
    
         getBars:(location)=>{
        dispatch(getBars(location))
      },
      getUser:()=>{
        dispatch(getUser())
      },

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)