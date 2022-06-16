import Image from "next/image";
 import { useRef, useState } from "react";
import axios from "axios";
export default  function CrudApi({movies}) {
    const [newMovieApi, setNewMovieApi] = useState("");

    async  function AddNewMovieApi(movie) {
        
          
        const imageUrl = movie.poster_path;
        const title = movie.title;
        const overview = movie.overview;
        const genres = movie.genres;
        const vote_average = movie.vote_average;
        const release_date =  movie.release_date;
        await axios.post("/api/addMovieApi", {
          id: parseInt(movie?.id),
          imageUrl,
          title,
          overview,
          genres,
          vote_average,
          release_date,
         
        });
       window.location.reload();
      }
    
    
    // const [seletedMovie, setSeletedMovie] = useState(null);
    return (<>
        <div className="container">
            <h3>Crud Api Movie</h3>
            
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Id</th>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Poster</th>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Title</th>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Overview</th>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Genres</th>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Date</th>
                        
                      
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie=>
                        <tr key={movie.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            
                            <td>{movie.id}</td>
                            <td><Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width={100} height={100} className="rounded-md" alt={movie.title} /></td>
                            <td className="font-bold text-xl my-2"> {movie.title}</td>
                            <td>{movie.overview}</td>
                            <td className="font-bold">{movie.genre_ids.map(genre => genre).join(', ')}</td>
                            <td className="font-bold">{movie.release_date}</td>
                            <button onClick={() =>AddNewMovieApi(movie)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Movie</button>
                             
                        </tr>
                    )}
                </tbody>
            </table>
         
        </div>

       

    </>)
}
// async function addMovieApi(movie) {
   
//         await axios.post("/api/addMovieApi", { id: parseInt(movie?.id) });
//         window.location.reload();
    
//   }
//   async  function AddMovieApi({ movie }) {
//     const formRef = useRef();
    
    
      
//       const {
//         addMoviePoster,
//         addMovieTitle,
//         addMovieOverview,
//         addMovieGenres,
//         addMovieDate,
//        } = formRef.current;
//       const poster = addMoviePoster.value;
//       const title = addMovieTitle.value;
//       const overview = addMovieOverview.value;
//       const genres = addMovieGenres.value;
//       const date =  addMovieDate.value;
//       await axios.post("/api/addMovieApi", {
//         id: parseInt(movie?.id),
//         poster,
//         title,
//         overview,
//         genres,
//         date,
       
//       });
//      window.location.reload();
//     }
  