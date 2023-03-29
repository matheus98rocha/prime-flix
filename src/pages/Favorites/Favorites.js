import { useState } from "react";
import { useEffect } from "react";
import MovieList from "../../layout/MovieList/MovieList";
import { MovieListWrapper } from "../../styles/MovieListWrapper.styles";

import { FavoritesWrapper } from "./favorites.styles.js";
const Favorites = () => {
  const [favoritesMovies, setFavoritesMovies] = useState([]);

  useEffect(() => {
    const movieStorage = JSON.parse(localStorage.getItem("@primeFlix"));
    setFavoritesMovies(movieStorage || []);
  }, []);

  const handleDelete = (movieId) => {
    const filteredMovies = favoritesMovies.filter(
      (movie) => movie.id !== movieId
    );

    setFavoritesMovies(filteredMovies);
    localStorage.setItem("@primeFlix", JSON.stringify(filteredMovies));
  };

  return (
    <MovieListWrapper>
      <FavoritesWrapper>
        <h1>Meus filmes</h1>
        <MovieList
          movies={favoritesMovies}
          canDelete={true}
          storageMovies={favoritesMovies}
          getIdMovie={handleDelete}
        />
      </FavoritesWrapper>
    </MovieListWrapper>
  );
};

export default Favorites;
