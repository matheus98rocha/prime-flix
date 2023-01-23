import { useState } from "react";
import { useEffect } from "react";
import MovieList from "../../componentes/MovieList/MovieList";
import "./favorites.css";
const Favorites = () => {
  const [favoritesMovies, setFavoritesMovies] = useState([]);

  useEffect(() => {
    const movieStorage = JSON.parse(localStorage.getItem("@primeFlix"));
    setFavoritesMovies(movieStorage || []);

    window.removeEventListener("storage", movieStorage);
    setFavoritesMovies(movieStorage || []);
  }, []);

  return (
    <div className="favorites-wrapper">
      <h1>Meus filmes</h1>
      <MovieList
        movies={favoritesMovies}
        canDelete={false}
        storageMovies={favoritesMovies}
      />
    </div>
  );
};

export default Favorites;
