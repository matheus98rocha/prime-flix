import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import Error from "../../componentes/Error/Error";
import Loading from "../../componentes/Loading/Loading";
import { movie } from "../../services/movies";
import "./movie.css";

const Movies = () => {
  const { id } = useParams();

  const {
    isLoading,
    error,
    data: selectedMovie,
  } = useQuery({
    queryKey: ["selectedMovie"],
    queryFn: () => movie.getMoviesById(id).then((e) => e.data),
  });

  //Verify if the data is loading
  if (isLoading) return <Loading />;

  //   Verify if a error ocurred
  if (error) return <Error error={error.message} />;

  return (
    <div className="filmDetails">
      <h1>{selectedMovie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`}
        alt={selectedMovie.title}
      />
      <h3>Sinopse</h3>
      <span>{selectedMovie.overview}</span>
      <strong>Avaliação: {selectedMovie.vote_average} / 10</strong>
      <div className="areaButtons">
        <button>Salvar</button>
        <button>
          <a href="#">Trailer</a>
        </button>
      </div>
    </div>
  );
};

export default Movies;
