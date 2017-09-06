import React, { Component } from 'react'
import Card from './Card'




export default class Display extends Component{


render(){
    const style={
        textAlign:'center'
    }
    
    console.log(this.props.error=='no match found')
    if(this.props.error=='no match found'){
        return (
        <div style={style}>
        <img  src='http://s2.quickmeme.com/img/76/7678de76cbb01caf558f4c80dc898efeaefd18fe6c1a81f636f612cd7e2b26fc.jpg' />
        </div>)
 }
    
    else if(this.props.bars){
        const bar=this.props.bars.map((bar)=>{
    return(
        
    <Card getUsers={this.props.getUsers} users={this.props.users} barsGoing={this.props.barsGoing} barsGoing={this.props.barsGoing} bar = {bar} isAuthenticated={this.props.isAuthenticated}  key={bar.id} info ={bar} going={this.props.going} />
    
)
})
return(

    <div className='row'>
    {bar}
    </div>
)
    }else if(this.props.fetching){
        return <div id="inner">
  <div className="impress"></div>
  <div className="containe">
    <ul>
       <li> </li>
       <li> </li>
       <li> </li>
       <li> </li>
       <li> </li>
       <li> </li>
    </ul>
  </div>
</div>
    }else{
        return <div></div>
    }

}

}