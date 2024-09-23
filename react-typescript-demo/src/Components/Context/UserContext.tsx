import React, { createContext, useState } from "react"

export type AuthUser={
     name:string
     email:string
}
type useContextType={
      user:AuthUser | null
      setuser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
type UsercontextProviderProps ={
     children:React.ReactNode
}
export const Usercontext =createContext<useContextType>({} as useContextType)


export const UsercontextProvider = ({children}:UsercontextProviderProps) => {
        const [user, setuser] = useState<AuthUser | null>(null)
        return <Usercontext.Provider value={{user,setuser}}>{children}</Usercontext.Provider>
}
function getitem(){
     console.log('usercontext is runing')
} 