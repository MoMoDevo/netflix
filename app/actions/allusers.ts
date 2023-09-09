import prismadb from "@/lib/prismaDb";

export const getAllUsers=async()=>{
    const members=await prismadb.member.findMany({
        include:{
            profile:true,
            directMessages:true
        }
    })
    return members

}