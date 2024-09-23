import React, { useEffect, useRef } from 'react'
   type userrefProps={
        
   }
export const DomRef = () => {
    const inputref=useRef<HTMLInputElement>(null!)
    useEffect(() => {
        inputref.current.focus()
    }, [])
    
  return (
    <div>
         <input type='text' ref={inputref} ></input>
    </div>
  )
}
