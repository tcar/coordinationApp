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
         
            {this.props.isAuthenticated?(<div>
              <Toolbar>
                <ToolbarTitle text={'welcome' + ' ' + this.props.user.facebook.name} />
          <ToolbarGroup lastChild={true}>
                         <RaisedButton  onClick={()=>{this.props.logout()}} primary={true} label='logout'></RaisedButton>

           </ToolbarGroup>
          </Toolbar>





            
            </div>
):(<div>

 <Toolbar>
          <ToolbarTitle text='Welcome motherfucker! Login to check in!' />
          <ToolbarGroup lastChild={true}>
           </ToolbarGroup>
          </Toolbar>
</div>)
              
            }
         

        </div>
    )
}


}