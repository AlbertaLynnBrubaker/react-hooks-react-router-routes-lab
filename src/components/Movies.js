import React from "react";
import { movies } from "../data";
import {v4 as uuid} from "uuid"

function Movies() {
  

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return (
          <div key={uuid()}>
            {movie.title}
            <p>Runtime: {movie.time}mins</p>
            <ul>
              {movie.genres.map(genre => <li key={uuid()}>{genre}</li>)}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Movies;
