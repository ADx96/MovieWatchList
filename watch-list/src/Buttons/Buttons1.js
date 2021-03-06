import React from "react";
import { ButtonWrapper } from "../Components/Styles";
import moviesArea from "../Components/MovieArea";
import { Button } from "react-bootstrap";
import "../App.css";
const DeleteButton = ({ movieId }) => {
  return (
    <ButtonWrapper>
      <Button variant="danger" onClick={() => moviesArea.deleteMovie(movieId)}>
        Delete Movie
      </Button>
    </ButtonWrapper>
  );
};

export default DeleteButton;
