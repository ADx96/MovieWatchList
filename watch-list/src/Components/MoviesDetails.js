import React from "react";
import { DetailWrapper } from "../styles";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import productsStore from "../Stores/ProductStore";
import { observer } from "mobx-react";
import movies from "./movies";

const MoviesDetails = () => {
  const productSlug = useParams().productSlug;
  const product = productsStore.products.find(
    (product) => product.slug === productSlug
  );
  return (
    <DetailWrapper>
      <h1>{movie.name}</h1>

      <img src={movie.image} alt={product.name} />

      <p>{movie.description}</p>
    </DetailWrapper>
  );
};

export default observer(MoviesDetails);
