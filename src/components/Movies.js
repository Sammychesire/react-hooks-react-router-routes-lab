import React from "react";
import { movies } from "../data";

function Movies() {
  return (<div>
    <h1>Movies Page</h1>
    {movies.map((movie,index) =>{
      return(
        <React.Fragment key={index}>
          <p>{movie.title}</p>
          <small>{movie.time}</small>
          <ul>
            {movie.genres.map((genre, i) => (
              <li key={i}>{genre}</li>
            ))}
          </ul>
          </React.Fragment>
        );
    })}
  </div>
  )
}

export default Movies;
