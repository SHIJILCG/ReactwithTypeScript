import React, { useState } from 'react'
type AuthUser={
     name:string,
     email:string
}
export const User = () => {
    const [user, setuser] = useState<AuthUser>({} as AuthUser)

    const handleLogin =()=>{
        setuser({
             name:'shijil',
             email:'shijil@gamil.com',
        })
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        {/* <button onClick={handleLogout}>Logout</button> */}
        <div>Use name is {user.name}</div>
        <div>Use email is {user.email}</div>
    </div>
  )
}
