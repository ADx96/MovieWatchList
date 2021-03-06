import React from "react";
import SearchBar from "./Searchbar";
import { MovieWrapper, WatchListWrapper } from "./Styles";
import { observer } from "mobx-react";
import "../App.css";
const Watched = () => {
  return (
    <WatchListWrapper>
      <SearchBar />
      <h1> Watched</h1>
      <MovieWrapper></MovieWrapper>
    </WatchListWrapper>
  );
};
export default observer(Watched);
