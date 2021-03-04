import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import MovieModal from "../MovieModal/MovieModal";
import { useState } from "react";
import MovieArea from "../Components/MovieArea";
export const DeleteButton = ({ movieId }) => {
  return (
    <DeleteButtonStyled onClick={() => MovieArea.deleteMovie(movieId)}>
      Delete
    </DeleteButtonStyled>
  );
};
