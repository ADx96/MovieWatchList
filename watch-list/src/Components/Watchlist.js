import React from "react";
import MovieItem from "../Components/MovieItem";
import SearchBar from "./Searchbar";
import MovieWrapper from "../styles";
import { useState } from "react";
import AddButton from "../Buttons/AddButton";
import movieList from "../Components/Movielist";
import { observer } from "mobx-react";

const WatchList = () => {
  const [query, setQuery] = useState("");

  const watchlist = movieList.movies
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <MovieItem movie={movies} key={movie.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <MovieWrapper>{watchlist}</MovieWrapper>
      <AddButton />
    </div>
  );
};
export default observer(WatchList);
