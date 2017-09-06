import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class Searchbar extends Component{
    render(){
        const style={
            margin:{
                'marginTop':'6px'
            },
            textColor:{
                color:"white"
            }
          
      }
        return(
            <div className = 'container'>
            <div className='row'>
                <div className='col s10'>
                    <TextField 
                    onChange={()=>{this.props.handleChange()}}
                    id='barSearch' 
                    hintStyle={style.textColor}
                    inputStyle={style.textColor}
                    hintText='enter your city'
                    fullWidth={true}
                    />
                </div>
                <div className='col s2'>
                <RaisedButton onClick={()=>{this.props.getBars()}} style={style.margin} primary={true} label='search'></RaisedButton>
                </div>
                
            </div>
            </div>
        )
    }
}