import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Error from "../../componentes/Error/Error";
import Loading from "../../componentes/Loading/Loading";
import { movie } from "../../services/movies";
import "./movie.css";

import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

import { LazyLoadImage } from "react-lazy-load-image-component";

const Movie = () => {
  const { id } = useParams();
  const [movieUrl, setMovieUrl] = useState("");
  const [loadingTrailer, setLoadingTrailer] = useState(false);

  const {
    isLoading,
    error,
    data: selectedMovie,
  } = useQuery({
    queryKey: ["selectedMovie"],
    queryFn: () =>
      movie.getMoviesById(id).then((e) => {
        setLoadingTrailer(true);
        movieTrailer(e.data.title, {
          language: "pt-BR",
          year: e.data.release_date,
        }).then((res) => {
          console.log(res);
          setMovieUrl(res);
          setLoadingTrailer(false);
        });

        return e.data;
      }),
  });

  //Verify if the data is loading
  if (isLoading || loadingTrailer) return <Loading />;

  //   Verify if a error ocurred
  if (error) return <Error error={error.message} />;

  return (
    <>
      <div className="film-details">
        <div className="film-deatails-header">
          <h1>{selectedMovie.title}</h1>
        </div>

        <div className="film-details-main">
          <div className="image-wrapper">
            <LazyLoadImage
              src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`}
              alt={selectedMovie.title}
              effect="blur"
              className="img-movie"
            />
          </div>

          <div className="movie-info-wrapper">
            <h3>Sinopse</h3>
            <span title="selectedMovie.overview" tolti >{selectedMovie.overview}</span>
            <div className="movie-info">
              <p>Ação</p>
              <p>192 minutos</p>
              <strong>Avaliação: {selectedMovie.vote_average} / 10</strong>
            </div>
            <div className="buttons-wrapper">
              <button>Salvar</button>
              {movieUrl === null && (
                <button>
                  <a href="#">Trailer</a>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="player-wrapper">
          {movieUrl !== null && (
            <ReactPlayer
              url={movieUrl}
              controls={true}
              className="reactPlayer"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Movie;
