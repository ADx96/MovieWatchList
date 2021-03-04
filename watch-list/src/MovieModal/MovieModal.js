import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import { CreateButtonStyled } from "../styles";
import moviesArea from "../Components/MovieArea";

const MovieModal = ({ createProduct }) => {
  const [movie, setMovie] = useState({
    name: "",
    image: "",
  });

  //   const handleChange = (event) => {
  //     setProduct({ ...product, [event.target.name]: event.target.value });
  //   };
  //   const handleSubmit = (event) => {
  //     closeModal();
  //     event.preventDefault();
  //     productsStore.createProduct(product);
  //   };

  return (
    <Modal createMovie={createMovie} contentLabel="Product Modal">
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
          </div>
        </div>
        <div className="form-group">
          <label>Image</label>
          <input required type="image" className="form-control" name="Image" />
        </div>
        <CreateButtonStyled className="btn float-right">
          Create
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default MovieModal;
