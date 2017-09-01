import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup,ToolbarTitle} from 'material-ui/Toolbar';

export default class Navbar extends Component{

render(){
    return(
        <div>
          <Toolbar>
          <ToolbarTitle text='Nightlife' />
          <ToolbarGroup lastChild={true}>
            <RaisedButton type='submit' primary={true} label='logout'></RaisedButton>
          </ToolbarGroup>
          </Toolbar>

        </div>
    )
}


}