import React from 'react'
 type HeadingProps={
       children: JSX.Element
 }
export const Heading = ({children}:HeadingProps) => {
  return (
    <div>
        This is a Heading
     {children}
    </div>
  )
}
