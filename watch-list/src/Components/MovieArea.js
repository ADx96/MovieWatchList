import movies from "./movies";
import slugify from "react-slugify";
import { makeObservable, observable, action } from "mobx";
import Watched from "./Watched";

class MoviesArea {
  movies = movies;
  Watched = Watched;
  createMovie = (movie) => {
    movie.id = this.movies[this.movies.length - 1].id + 1;
    movie.id = slugify(movie.name);
    this.movies.push(movie);
  };

  Watched = (movie) => {
    movie.id = this.movies[this.movies.length - 1].id + 1;
    movie.id = slugify(movie.name);
    this.movies.push(movie);
  };
  deleteMovie = (movieId) => {
    this.movies = this.movies.filter((movie) => movie.id !== movieId);
  };
  constructor() {
    makeObservable(this, {
      movies: observable,
      deleteMovie: action,
      createMovie: action,
      Watched: action,
    });
  }
}

const moviesArea = new MoviesArea();
export default moviesArea;
