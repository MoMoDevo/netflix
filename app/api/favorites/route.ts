
import prisma from "../../../lib/prismaDb"
export async function POST(req:Request){
    const {userId,movieId, }=await req.json()
         

    try {
        const existingMovie = await prisma.movie.findUnique({
            where: {
              id: movieId,
            }
          });
      
           
      
        
    } catch (error) {
        
    }






}