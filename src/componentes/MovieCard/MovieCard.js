import { Link } from "react-router-dom";
import "./movieCard.css";

import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieCard = ({ movie }) => {
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
      <Link to={`/movie/${movie.id}`}>Acessar</Link>
    </article>
  );
};

export default MovieCard;
