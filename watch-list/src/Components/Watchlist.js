import React from "react";
import MovieItem from "../Components/MovieItem";
import SearchBar from "./Searchbar";
import { MovieWrapper, WatchListWrapper } from "./Styles";
import { useState } from "react";
import moviesArea from "../Components/MovieArea";
import { observer } from "mobx-react";

import { Button } from "react-bootstrap";

import "../App.css";
import Watched from "./Watched";
const WatchList = () => {
  const [query, setQuery] = useState("");
  const watchlist = moviesArea.movies
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <MovieItem movie={movie} key={movie.id} />);

  const Add = () => {
    Watched.push(watchlist.movie.name);
  };

  return (
    <WatchListWrapper>
      <SearchBar setQuery={setQuery} />
      <h1> Watchlist</h1>
      <MovieWrapper> {watchlist}</MovieWrapper>
      <Button onClick={() => Add()}>Watched</Button>
    </WatchListWrapper>
  );
};
export default observer(WatchList);
