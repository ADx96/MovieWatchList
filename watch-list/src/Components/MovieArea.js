import movies from "./movies";
import slugify from "react-slugify";
import { makeObservable, observable, action } from "mobx";

class MoviesArea {
  movies = movies;

  createMovie = (movie) => {
    movie.id = this.movies[this.movies.length - 1].id + 1;
    product.id = slugify(movie.name);
    this.movies.push(movie);
  };
  deleteProduct = (movieId) => {
    this.movies = this.movies.filter((movie) => movie.id !== movieId);
  };
  constructor() {
    makeObservable(this, {
      movies: observable,
      deleteMovie: action,
      AddMovie: action,
    });
  }
}

const moviesArea = new MoviesArea();
export default moviesArea;
