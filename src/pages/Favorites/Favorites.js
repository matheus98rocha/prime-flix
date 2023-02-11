import { useState } from "react";
import { useEffect } from "react";
import MovieList from "../../componentes/MovieList/MovieList";
import "./favorites.css";
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
    <div className="favorites-wrapper">
      <h1>Meus filmes</h1>
      <MovieList
        movies={favoritesMovies}
        canDelete={true}
        storageMovies={favoritesMovies}
        getIdMovie={handleDelete}
      />
    </div>
  );
};

export default Favorites;
