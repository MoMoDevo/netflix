import { UserButton } from "@clerk/nextjs"

const Servers = () => {
  return (
    <div>
      
      <p>hello</p>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default Servers