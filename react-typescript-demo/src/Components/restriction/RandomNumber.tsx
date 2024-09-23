import React from 'react'
type RandomNumberProps = RandomNumberNegativeProps | RandomNumberPositiveProps | RandomNumberZeroProps
type valuProps={
   value:number
}
type RandomNumberPositiveProps =  valuProps &{
  
    isNegative?:never
    ispositive:boolean
    isZero:never
}
type RandomNumberNegativeProps =   valuProps &{
  
    ispositive?:never
    isNegative:boolean
    isZero:never

    
}
type RandomNumberZeroProps = valuProps &{
  
    isZero?:boolean
    ispositive:never
    isNegative:never
}
export default function RandomNumber({value,ispositive,isNegative,isZero}:RandomNumberProps) {
  return (
    <div>
         {value}{ispositive && 'Positive'} {isNegative && 'negative'}{''}
         {isZero && 'zero'}
    </div>
  )
}
