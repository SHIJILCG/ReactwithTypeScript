import React, { useState } from 'react'

export const LoggedIn = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
     const handleLogin =()=>{
        setisLoggedIn(true)
     }
     const handleout =()=>{
        setisLoggedIn(false)
     }
     
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleout}>Logout</button>
        <div>User is {isLoggedIn ? 'Logged In' :'Logged Out'}</div>
    </div>
  )
}
