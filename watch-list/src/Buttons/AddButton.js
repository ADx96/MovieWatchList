import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

import moviesArea from "../Components/MovieArea";

const AddButton = () => {
  const [movie, setMovie] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    moviesArea.createMovie(movie);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group row">
        <div className="col-6">
          <label>Name</label>
          <input
            required
            type="text"
            className="form-control"
            name="name"
            onChange={handleChange}
          />
          <label for="img">Select image:</label>
          <input
            type="file"
            className="form-control"
            name="img"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <div className="btn1">
          <Button type="submit" ariant="primary">
            Add Movie
          </Button>
        </div>
      </div>
    </form>
  );
};
export default AddButton;
