import { getAllUsers } from "@/app/actions/allusers"
import { SocketIndicator } from "@/components/socket-indicator"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/navigation"

const Servers = async() => {
  const users=await getAllUsers()
  console.log(users)

  return (
    <div>
      {users.map((pro)=>(
        <div className="flex flex-col border-solid shadow-sm" key={pro.id} >
         <a href={`/servers/conversations/${pro.id}`}> <p>{pro.profile.email}</p></a>
          
 
        </div>
      ))}
      
      <p>hello</p>
      <UserButton afterSignOutUrl="/"/>
      <SocketIndicator/>
    </div>
  )
}

export default Servers