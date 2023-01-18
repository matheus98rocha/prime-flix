import MovieCard from "../MovieCard/MovieCard";
import "./movieList.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;
