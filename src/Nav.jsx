import React, {useContext, useState} from "react";

import "./nav.css";
import {MovieContext} from "./MovieContext";

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return (
      <div className="nav">
          <h3>Movie Dev</h3>
          <h3>Movie Number: {movies.length}</h3>
      </div>
    );
}

export default Nav;
