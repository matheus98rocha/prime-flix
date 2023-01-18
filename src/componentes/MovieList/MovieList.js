import { Link } from "react-router-dom";
import "./movieList.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map((movie) => {
        return (
          <article key={movie.id}>
            <strong>{movie.title}</strong>
            <div className="imageWrapper">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <Link to={`/movie/${movie.id}`}>Acessar</Link>
          </article>
        );
      })}
    </div>
  );
};

export default MovieList;
