import { count } from 'console'
import React, { useReducer } from 'react'
const intialstate ={count: 0}

type actionProps ={
     type:string
     payload:number
}
type countProps ={
    count:number
}

const reducer =(state:countProps,action:actionProps)=>{
       switch(action.type){
          case 'increment':
              return {count:state.count + action.payload}
          case 'decrement':
                return  {count:state.count - action.payload}
            default :
                return  state             
       }
}
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer,intialstate)
  return (
    <div>
        Count::{state.count}
         <button onClick={()=> dispatch({type:'increment',payload:10})}>Increment</button>
         <button onClick={()=> dispatch({type:'decrement',payload:10})}>decrement</button>
         {/* <button onClick={()=> dispatch({type:'decrement'})}>Reset</button> */}
    </div>
  )
}
