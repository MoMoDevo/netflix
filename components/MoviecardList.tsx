import prisma from "../lib/prismaDb"
import Moviecard from "./MovieCard";
const MoviecardList = async() => {
    const allMovies=await prisma.movie.findMany()

    return (
        <div className="px-22 md:px-12 mt-4 space-y-8">
          <div>
            <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">title</p>
            <div className="grid grid-cols-4 gap-2">
              {allMovies.map((movie) => (
                <Moviecard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      );
    }
    


export default MoviecardList