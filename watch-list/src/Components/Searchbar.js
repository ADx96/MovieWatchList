import React from "react";
import { SearchBarStyled } from "./Styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="Search"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
