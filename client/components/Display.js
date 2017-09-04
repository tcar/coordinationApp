import React, { Component } from 'react'
import Card from './Card'




export default class Display extends Component{

render(){
    
    if(localStorage.getItem('info')){
            const info= JSON.parse(localStorage.getItem('info'))
const bars=info.map((bar)=>{
    return(
    <Card isAuthenticated={this.props.isAuthenticated} going = {this.props.going} key={bar.id} info ={bar} />
)
})
return(
    <div>
    {bars}
    </div>
)
    }else{
        return <div></div>
    }

}

}