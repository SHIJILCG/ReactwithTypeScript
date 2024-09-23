import React, { useContext } from 'react'
import {ThemeContext } from './ThemeContext'

export const Box = () => {
    const themevalue = useContext(ThemeContext)
  return (
    <div style={{background:themevalue.primary.main,color:themevalue.secondary.text,padding:'1rem'}}>Theme context</div>
  )
}
