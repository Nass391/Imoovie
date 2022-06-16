import Image from "next/image";
import { useRef, useState } from "react";
import AddMovie from "./AddMovie.js"
import EditMovie from "./EditMovie.js"
import Link from  "next/link";
import axios from "axios"


export default  function CrudMovie({movies}) {
    const [showModal, setShowModal] = useState(false);
    const [showEditMovieModal, setShowEditMovieModal] = useState(false);
    const [seletedMovie, setSeletedMovie] = useState(null);
    const imageUrl = 'https://Image.tmdb.org/t/p/w500/';
    return (<>
        <div className="container">
            <h3>Crud Movie</h3>
            {/* <button onClick={() => setShowModal(true)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Movie</button> */}
            <Link href = "/admin/adminApi">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Movie</button>
            </Link>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Id</th>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Poster</th>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Title</th>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Overview</th>
                        {/* <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Genres</th> */}
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Rate</th>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Date</th>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Update</th>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie=>
                        <tr key={movie.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td>{movie.id}</td>
                            <td><Image src={`https://image.tmdb.org/t/p/w500${movie.imageUrl}`} width={100} height={100}  alt={movie.title}/></td>
                            {/* <td><img src={IMAGES_API + poster_path} alt={title}/></td> */}
                            {/* <td><Image src={`/${movie.poster_path}`} width={100} height={100} className="rounded-md" alt={movie.title} /></td> */}
                            {/* <td><Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width={100} height={100} className="rounded-md" alt={movie.title} /></td> */}
                            <td className="font-bold text-xl my-2"> {movie.title}</td>
                            <td>{movie.overview}</td>
                            {/* <td className="font-bold">{movie.genre_ids.map(genre => genre).join(', ')}</td> */}
                            <td>{movie.vote_average}</td>
                            <td className="font-bold">{movie.release_date}</td>
                            <td><button onClick={() => (setSeletedMovie(movie), setShowEditMovieModal(true))} className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button></td>
                            <td><button onClick={() => deleteMovie(movie)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            {(showModal) ? <AddMovie closeModal={() => setShowModal(false)}></AddMovie> : null}
            {showEditMovieModal ? ( <EditMovie movie={seletedMovie} closeModal={() => setShowEditMovieModal(false)} />) : null}
        </div>

    </>)
}
async function deleteMovie(movie) {
    if (window.confirm("Do you want to delete this movie?")) {
        await axios.post("/api/deleteMovie", { id: parseInt(movie?.id) });
        window.location.reload();
    }
  }

