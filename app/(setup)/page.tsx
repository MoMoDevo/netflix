import { redirect } from "next/navigation";


import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-modal";
import prismadb from "@/lib/prismaDb";
import { SocketIndicator } from "@/components/socket-indicator";

const SetupPage = async () => {
  const profile = await initialProfile();
  
 
 

 

  return (
    <div className="flex">jkkelo</div>
  )
}
 
export default SetupPage;