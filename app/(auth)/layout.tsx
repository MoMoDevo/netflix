"use client"
interface Children{
    children:React.ReactNode
}
const layout = ({children}:Children) => {
  return (
    <div
    
    >{children}</div>
  )
}

export default layout