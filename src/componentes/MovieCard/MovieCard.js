import { Link } from "react-router-dom";
import "./movieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <article>
      <strong className="movieTitle">{movie.title}</strong>
      <div className="imageWrapper">
        <img
          className="imageCard"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <Link to={`/movie/${movie.id}`}>Acessar</Link>
    </article>
  );
};

export default MovieCard;
