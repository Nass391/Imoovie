import { useState, useRef } from "react";
import axios from "axios";

export default function EditMovie({ closeModal, movie }) {
  const formRef = useRef();
  
  async function editMovie() {
    
    const {
      editMovieImageUrl,
      editMovieTitle,
      editMovieOverview,
    //   editMovieGenres,
      editMovieVote_average,
      editMovieRelease_date,
     } = formRef.current;
     const imageUrl = editMovieImageUrl.value;
     const title = editMovieTitle.value;
     const overview = editMovieOverview.value;
    //  const genres = editMovieGenres.value;
     const vote_average = editMovieVote_average.value;
     const release_date =  editMovieRelease_date.value;
    
    await axios.put("/api/editMovie", {
      id: parseInt(movie?.id),
      imageUrl,
      title,
      overview,
    //   genres,
      vote_average,
      release_date,
     
    });
   
    window.location.reload();
  }

  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={() => closeModal()}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Edit Movie</h3>
          <span
            style={{ padding: "10px", cursor: "pointer" }}
            onClick={() => closeModal()}
          >
            X
          </span>
        </div>
        <div className="modal-body content">
          <form ref={formRef}>
            <div style={{ display: "flex", margin: "2px 2px 0 0" }}>
              <div
                style={{ flex: "1 1 100%", margin: "0 0 2px 5px" }}
                className="inputField"
              >
                <div className="label">
                  <label>Poster</label>
                </div>
                <div>
                  <input
                    defaultValue={movie?.imageUrl}
                    name="editMovieImageUrl"
                    type="text"
                  />
                </div>
              </div>
              <div
                style={{ flex: "1 1 50%", margin: "0 0 2px 5px" }}
                className="inputField"
              >
                <div className="label">
                  <label>Title</label>
                </div>
                <div>
                  <input
                    defaultValue={movie?.title}
                    name="editMovieTitle"
                    type="text"
                  />
                </div>
              </div>
              <div
                style={{ flex: "1 1 50%", margin: "0 0 2px 5px" }}
                className="inputField"
              >
                <div className="label">
                  <label>Overview</label>
                </div>
                <div>
                  <input
                    defaultValue={movie?.overview}
                    name="editMovieOverview"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="inputField">
              <div className="label">
                <label>Rate</label>
              </div>
              <div>
                <input
                  defaultValue={movie?.vote_average}
                  name="editMovieVote_average"
                  type="text"
                />
              </div>
            </div>
            <div className="inputField">
              <div className="label">
                <label>Date</label>
              </div>
              <div>
                <input
                  defaultValue={movie?.release_date}
                  name="editMovieRelease_date"
                  type="text"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={() => closeModal()}>Cancel</button>
          <button  className="btn" onClick={() => editMovie()}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}