import MovieCard from "../../componentes/MovieCard/MovieCard";
import EmptyList from "./EmptyList/EmptyList";
import { MoviesWrapper } from "./movieList.styles";

const MovieList = ({ movies, canDelete, getIdMovie }) => {
  if (movies.length === 0) return <EmptyList />;

  return (
    <MoviesWrapper>
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
    </MoviesWrapper>
  );
};

export default MovieList;
