"use client"

import { redirect } from "next/navigation"
import prisma  from  "../../lib/prismaDb"
import { useSession } from "next-auth/react"
const Users = () => {
  const {data:session}=useSession()


   
  if(session?.user?.role !== "admin"){ 
    redirect("/")

  }

   return (
    <div>
      <p>users are here</p>
    </div>
  )
}

export default Users