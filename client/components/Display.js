import React, { Component } from 'react'
import Card from './Card'




export default class Display extends Component{

render(){
    const bars=this.props.bars
    if(bars){
        const bar=bars.map((bar)=>{
    return(
    <Card  bar = {bar} isAuthenticated={this.props.isAuthenticated}  key={bar.id} info ={bar} going={this.props.going} />
)
})
return(
    <div>
    {bar}
    </div>
)
    }else{
        return <div></div>
    }

}

}