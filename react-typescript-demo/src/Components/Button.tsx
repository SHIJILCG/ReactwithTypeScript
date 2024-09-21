import React from 'react'
type buttonProps ={
     handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=> void
}
export const Button = ({handleClick}:buttonProps) => {
  return  <button onClick={(event)=> handleClick(event,1)} className=''>Click</button>
  
}
