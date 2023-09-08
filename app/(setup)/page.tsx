import { redirect } from "next/navigation";
 
 import { initialProfile } from "@/lib/initial-profile";
import prismadb from "@/lib/prismaDb";
 
const SetupPage = async () => {
  const profile = await initialProfile();
return(
    <p>helo</p>
)
 

 
}
 
export default SetupPage;