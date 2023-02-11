import { Link } from "react-router-dom";
import "./movieCard.css";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { TiDelete } from "react-icons/ti";

const MovieCard = ({ movie, canDelete = false, getIdMovie }) => {
  return (
    <article>
      {!canDelete ? (
        <strong className="movie-title">{movie.title}</strong>
      ) : (
        <div className="header-card">
          <strong className="movie-title">{movie.title}</strong>
          <TiDelete
            className="button-remove"
            onClick={() => getIdMovie(movie.id)}
          />
        </div>
      )}
      <div className="image-wrapper">
        <LazyLoadImage
          className="image-card"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
          effect="blur"
          delayMethod="throttle"
          threshold={100}
        />
      </div>
      <Link to={`/movie/${movie.id}`}>Ver Detalhes</Link>
    </article>
  );
};

export default MovieCard;
