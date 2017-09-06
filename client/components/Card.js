import React, { Component } from 'react'
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Toggle from 'material-ui/Toggle';
import Dialog from 'material-ui/Dialog';
export default class BarCard extends Component{
    constructor(){
        super()
        this.state = {
            open:false
        }
    }

  handleOpen () {
    this.setState({open: true});
  };

  handleClose (){
    this.setState({open: false});
  };
    
    render(){
     
        
   
        const bars = this.props.barsGoing
        const going = bars.includes(this.props.bar.id)

        
          const style={
      'padding':'60px'
    }
    const bar = this.props.bar
    const users = this.props.users
    
    const userGoing = users.map((user)=>{
        if(user.bars.includes(this.props.bar.id)){
            return <p key={user._id}>{user.facebook.name}</p>
        }
    })
    console.log(userGoing)
    

        return(
            <div style={style}>
                <Card>
                <CardMedia 
                overlay={<CardTitle title={'phone number:'} subtitle={bar.phone} />}
                >
                <img src={bar.image_url} alt="bar" />
                </CardMedia>
                <CardTitle title={bar.name} subtitle={bar.location.address1} />
                <CardText>
                ratings:{bar.rating}/5<br/>
                review count:{bar.review_count}
                </CardText>
                <CardActions>
                {this.props.isAuthenticated?
                (   <div>
                <Toggle toggled={going} onToggle={()=>{this.props.getUsers()}}   onClick={()=>{this.props.going({barid:bar.id})}} />
                 <RaisedButton label="Scrollable Dialog" onClick={()=>{this.handleOpen()}} />
        <Dialog
          title="Scrollable Dialog"
          modal={false}
          open={this.state.open}
          onRequestClose={()=>{this.handleClose()}}
          autoScrollBodyContent={true}
        >{userGoing}</Dialog>
                </div>):
                (  <div>
                <RaisedButton  href='/auth/facebook' label="facebok login" primary={true} />
                
                </div>)
            }
               
                
              
              }
            
                </CardActions>
            </Card>
            </div>
        )
    }
}