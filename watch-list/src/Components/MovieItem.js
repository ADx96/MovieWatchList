import React from "react";
import { MovieWrapper } from "./Styles";
import DeleteButton from "../Buttons/Buttons1";

const MovieItem = ({ movie }) => {
  return (
    <MovieWrapper>
      <div>
        <DeleteButton movieId={movie.id} />
      </div>
      <p>{movie.name}</p>
    </MovieWrapper>
  );
};

export default MovieItem;
