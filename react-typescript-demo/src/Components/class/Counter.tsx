import { count } from 'console'
import React, { Component } from 'react'
type counterProps ={
     message:string
}
type Counterstate={
     count:number
}
export default class Counter extends Component<counterProps,Counterstate> {
     state={
          count:0,
     }
     handleclick =()=>{
         this.setState(PrevState => (
              {count:PrevState.count + 1}
         ))  
    }
  render() {
    return (
      <div>
          <button onClick={this.handleclick}>Increment</button>
          {this.props.message}{this.state.count}
      </div>
    )
  }
}
