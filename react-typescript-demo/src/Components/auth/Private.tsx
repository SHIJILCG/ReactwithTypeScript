import React from 'react'
import { Login } from './Login'
import { ProfileProps } from './Profile'
type PriveatProps = {
     isLoggedIn:boolean
     component:React.ComponentType<ProfileProps>
}
export const Private = ({isLoggedIn,component:Component}:PriveatProps) => {
    if(isLoggedIn){
         return <Component name='shijil' />
    }else{
         return <Login />
    }
}
