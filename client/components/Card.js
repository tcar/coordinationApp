import React, { Component } from 'react'
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

export default class BarCard extends Component{
    render(){
        return(
            <div>
                <Card>
                <CardMedia 
                overlay={<CardTitle title={'phone number:'} subtitle={'0981314207'} />}
                >
                <img  alt="bar" />
                </CardMedia>
                <CardTitle title={'bla'} subtitle={'bla'} />
                <CardText>
                ratings:{'4'}/5<br/>
                review count:{'154'}
                </CardText>
                <CardActions>
                
                  <div>
                <RaisedButton label='going ' primary={true}></RaisedButton> <p>0</p>
                </div>
                
                <div>
                <RaisedButton label="facebok" primary={true} />
                
                </div>
              }
               
                </CardActions>
            </Card>
            </div>
        )
    }
}