import { memo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Error from "../../componentes/Error/Error";
import Loading from "../../componentes/Loading/Loading";
import { movie } from "../../services/movies";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { useCallback } from "react";
import { MovieDetailsWrapper } from "./movieDetails.styles";

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
          setMovieUrl(res);
          setLoadingTrailer(false);
        });

        return e.data;
      }),
  });

  const handleSaveMovie = useCallback(() => {
    const myMovies = localStorage.getItem("@primeFlix");
    let savedMovies = JSON.parse(myMovies);

    if (!myMovies) {
      savedMovies = [];
    }

    const hasMovie = savedMovies.some((movie) => movie.id === selectedMovie.id);

    if (hasMovie) {
      toast.warning("Este filme já esta na sua lista", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        toastId: "movieAlreadyExists",
      });
      return;
    }

    savedMovies.push(selectedMovie);
    localStorage.setItem("@primeFlix", JSON.stringify(savedMovies));

    toast.success("Filme salvo com sucesso!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      toastId: "addSucess",
    });
  }, [selectedMovie]);

  //Verify if the data is loading
  if (isLoading || loadingTrailer) return <Loading />;

  //   Verify if a error ocurred
  if (error) return <Error error={error.message} />;

  return (
    <>
      <ToastContainer />
      <MovieDetailsWrapper>
        <div className="film-deatails-header">
          <h1>{selectedMovie.title}</h1>
        </div>

        <div className="film-details-main">
          <div className="image-movie">
            <LazyLoadImage
              src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`}
              alt={selectedMovie.title}
              effect="blur"
              className="img-movie"
            />
          </div>

          <div className="movie-info-wrapper">
            <h3>Sinopse</h3>
            <span title="selectedMovie.overview">{selectedMovie.overview}</span>
            <div className="movie-info">
              <p>{selectedMovie.genres[0].name}</p>
              <strong>Avaliação: {selectedMovie.vote_average} / 10</strong>
            </div>
            <div className="buttons-wrapper">
              <button buttonWidth={"30%"} fn={() => handleSaveMovie(selectedMovie)} category={"sucess"}>
                Salvar
              </button>
              {movieUrl === null && (
                <button>
                  <a
                    href={`https://youtube.com/results?search_query=${selectedMovie.title}`}
                    target="_blank"
                    rel="external noreferrer"
                  >
                    Trailer
                  </a>
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
      </MovieDetailsWrapper>
    </>
  );
};

export default memo(Movie);
