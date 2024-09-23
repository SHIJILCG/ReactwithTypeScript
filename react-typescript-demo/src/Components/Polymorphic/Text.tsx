import React, { Children } from 'react'
type TextOwnProps<E extends React.ElementType>={
     size?:'sm' | 'md' | 'lg'
     color?:'primary' | 'secondary'
     children:React.ReactNode
     as?:E
}
type TextProp <E extends React.ElementType > = TextOwnProps<E> & Omit<React.ComponentProps<E>,keyof TextOwnProps<E>>
export const Text = <E extends  React.ElementType='div' > ({size,color,children,as}:TextProp<E>) => {
    const Components = as || 'div'
  return (
    <Components className={`class-with-${size}-${color}`}>{children}</Components>
  )
}
