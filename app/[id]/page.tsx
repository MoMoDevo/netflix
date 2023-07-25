 import prisma from "../../lib/prismaDb"
 import Image from "next/image"

import { useParams } from 'next/navigation'
 
 
const MovieDetaiils = async({
    params
  }: {
    params: { id: string }
  }) => {
    const moovie=await prisma.movie.findFirst(
     {
      where:{
        id:params.id

        }

        }
    )
  


 
  return (
    <div>
        
        <p>details</p>
        <p>{moovie?.title}</p>
        <div className="m-auto p-9">

    <video src={moovie?.videoUrl} controls autoPlay />
        </div>
       


    </div>
  )
}

export default MovieDetaiils