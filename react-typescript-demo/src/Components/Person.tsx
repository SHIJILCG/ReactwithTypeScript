import React from 'react'
 type personProps ={
    name :{
          first:string,
          last:string
    }
 }
export const Person = ({name}:personProps) => {
  return (
    <div>
        {name.first} {name.last}
    </div>
  )
}
