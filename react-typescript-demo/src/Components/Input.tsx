import React from 'react'
type InputPops = {
     value:string,
     handleonChange:(event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = ({value,handleonChange}:InputPops) => {
    const handleINputchange=(event: React.ChangeEvent<HTMLInputElement>) =>{
         console.log(event)
    }
  return (
    <div>
        <input type="text" value={value} onChange={handleINputchange} />
    </div>
  )
}
