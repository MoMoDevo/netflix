 

 import { Button } from "@/components/ui/button"
import prisma from "../lib/prismaDb"
import { Info } from 'lucide-react'
import MoviecardList from "@/components/MoviecardList"
const Home = async() => {
  const singleMovie=await prisma.movie.findFirst()
 

 
    
  return (
    <div className="relative h-[56.25vw]">
      <video controls poster={singleMovie?.thumbnailUrl} className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500" autoPlay muted loop src={singleMovie?.videoUrl}></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {singleMovie?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {singleMovie?.description}
        </p>
         <Button className="flex gap-2" >
          <Info/>
          More Info

     
              
             

               
              
          </Button>
        </div>
        <MoviecardList/>


      </div>
 
  )
}
 

export default Home