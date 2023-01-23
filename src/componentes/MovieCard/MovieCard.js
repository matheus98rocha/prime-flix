import { Link } from "react-router-dom";
import "./movieCard.css";

import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieCard = ({ movie, canDelete = true, storageMovies }) => {
  const handleDelete = (storageMovies, movieID) => {
    const updatedMovies = storageMovies.filter((movie) => movie.id !== movieID);

    localStorage.setItem("@primeFlix", JSON.stringify(updatedMovies));
  };

  return (
    <article>
      <strong className="movie-title">{movie.title}</strong>
      <div className="image-wrapper">
        <LazyLoadImage
          className="image-card"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          effect="blur"
        />
      </div>
      {canDelete ? (
        <Link to={`/movie/${movie.id}`}>Ver Detalhes</Link>
      ) : (
        <div className="wrapper-buttons">
          <Link to={`/movie/${movie.id}`}>Ver Detalhes</Link>
          <button onClick={() => handleDelete(storageMovies, movie.id)}>
            Excluir
          </button>
        </div>
      )}
    </article>
  );
};

export default MovieCard;
