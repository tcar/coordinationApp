import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup,ToolbarTitle} from 'material-ui/Toolbar';

export default class Navbar extends Component{

render(){
  if(this.props.isAuthenticated){
  console.log(this.props.user.facebook.name)

  }
    return(
        <div>
          <Toolbar>
          <ToolbarTitle text='Nightlife' />
          <ToolbarGroup lastChild={true}>
            {this.props.isAuthenticated?(<div>
              
               <RaisedButton  onClick={()=>{this.props.logout()}} primary={true} label='logout'></RaisedButton>
            
            </div>
):(<div></div>)
              
            }
          </ToolbarGroup>
          </Toolbar>

        </div>
    )
}


}