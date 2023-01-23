import MovieCard from "../MovieCard/MovieCard";
import "./movieList.css";

const MovieList = ({ movies, canDelete, storageMovies, handleUpadte }) => {
  return (
    <div className="movies">
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            canDelete={canDelete}
            movies={movies}
            storageMovies={storageMovies}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
