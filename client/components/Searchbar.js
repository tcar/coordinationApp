import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class Searchbar extends Component{
    render(){
        const style={
          'marginTop':'6px'
      }
        return(
            <div className='row'>
                <div className='col s10'>
                    <TextField 
                    id='barSearch' 
                    hintText='enter your city'
                    fullWidth={true}
                    />
                </div>
                <div className='col s2'>
                <RaisedButton style={style} primary={true} label='search'></RaisedButton>
                </div>
                
            </div>
        )
    }
}