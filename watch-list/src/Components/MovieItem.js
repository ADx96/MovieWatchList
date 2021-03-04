import React from "react";
import MovieWrapper from "../styles";
import DeleteButton from "../Buttons/Buttons1";

const MovieItem = ({ movie }) => {
  return (
    <MovieWrapper>
      <p>{movie.name}</p>
      <DeleteButton movieId={movie.id} />
      <WatchedButton />
    </MovieWrapper>
  );
};

export default MovieItem;
