import MovieCard from "../MovieCard/MovieCard";
import EmptyList from "./EmptyList/EmptyList";
import "./movieList.css";

const MovieList = ({ movies, canDelete, getIdMovie }) => {
  if (movies.length === 0) return <EmptyList />;

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
