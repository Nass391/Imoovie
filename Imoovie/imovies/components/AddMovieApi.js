import { useState, useRef } from "react";
import axios from "axios";

export default  function AddNewMovieApi() {
    // const formRef = useRef();
     async  function AddNewMovieApi (params){
    
    const formRef = useRef();
    
      
    const {
      addMovieImageUrl,
      addMovieTitle,
      addMovieOverview,
      addMovieGenres,
      addMovieRelease_date,
     } = formRef.current;
    const imageUrl = addMovieImageUrl.value;
    const title = addMovieTitle.value;
    const overview = addMovieOverview.value;
    const genres = addMovieGenres.value;
    const release_date =  addMovieRelease_date.value;
    await axios.post("/api/addMovieApi", {
      id: parseInt(movie?.id),
      imageUrl,
      title,
      overview,
      genres,
      release_date,
     
    });
   window.location.reload();
  }
}
