import MovieCard from "../MovieCard/MovieCard";
import "./movieList.css";

const MovieList = ({ movies, canDelete, getIdMovie }) => {
  return (
    <div className="movies">
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            canDelete={canDelete}
            movies={movies}
            getIdMovie={getIdMovie}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
