import React, { Component } from 'react'
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Toggle from 'material-ui/Toggle';
export default class BarCard extends Component{
    constructor(){
        super()
        this.state = {
            toggle:false
        }
    }

    
    render(){
          const style={
      'padding':'60px'
    }
    const bar = this.props.bar
        console.log(bar)

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
                <Toggle  toggled={bar.mybar.going} onClick={()=>{this.props.going({barid:bar.mybar._id})}} />
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