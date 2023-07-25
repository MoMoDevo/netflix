"use client"
 import { redirect } from 'next/navigation'

import { useSession } from 'next-auth/react'
import React from 'react'

const Profile = () => {
  const {data:session}=useSession()
 if(!session){redirect("/auth")}

    console.log(session) 
  return (
    <div>
      m
      
    



    </div>
  )
}

export default Profile