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
      paddingTop:'60px'
    }
    
    const bar = this.props.bar
    const users = this.props.users
    
    const userGoing = users.map((user)=>{
        if(user.bars.includes(this.props.bar.id)){
            return <p key={user._id}>{user.facebook.name}</p>
        }
    })
    

        return(
            <div className='col s4' style={style}>
                <Card>
                <CardMedia 
                overlay={<CardTitle title={bar.name} subtitle={bar.location.address1} />}
                >
                <img src={bar.image_url} height="200" alt="bar" />
                </CardMedia>
                <CardTitle title={'phone number:'} subtitle={bar.phone} />
                <CardText>
                ratings:{bar.rating}/5<br/>
                review count:{bar.review_count}
                </CardText>
                <CardActions>
                {this.props.isAuthenticated?
                (   <div>
                <Toggle toggled={going}  onClick={()=>{ this.props.going({barid:bar.id})}}  />
                 <RaisedButton label="who is going" onClick={()=>{this.handleOpen()}} />
        <Dialog
          title="WHO IS GOING"
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