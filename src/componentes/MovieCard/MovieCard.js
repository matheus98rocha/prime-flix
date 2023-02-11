import { Link } from "react-router-dom";
import "./movieCard.css";

import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieCard = ({ movie, canDelete = true, getIdMovie }) => {
  return (
    <article>
      <strong className="movie-title">{movie.title}</strong>
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
      {canDelete ? (
        <Link to={`/movie/${movie.id}`}>Ver Detalhes</Link>
      ) : (
        <div className="wrapper-buttons">
          <Link to={`/movie/${movie.id}`}>Ver Detalhes</Link>
          <button onClick={() => getIdMovie(movie.id)}>Excluir</button>
        </div>
      )}
    </article>
  );
};

export default MovieCard;
