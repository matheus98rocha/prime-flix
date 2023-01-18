import { Link } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import "./movieList.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map((movie) => {
        return <MovieCard movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;
