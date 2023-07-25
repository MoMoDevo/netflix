"use client"


import {SessionProvider }  from "next-auth/react"

interface Children{
    children:React.ReactNode
    session?:any
 }
const AuthProvider = ({children}:Children) => {
  return (
    <SessionProvider   >{children}</SessionProvider >
  )
}

export default AuthProvider