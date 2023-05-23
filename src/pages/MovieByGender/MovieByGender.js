import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import Error from "../../componentes/Error/Error.js";
import Loading from "../../componentes/Loading/Loading.js";
import MovieList from "../../layout/MovieList/MovieList.js";
import { movie } from "../../services/movies/index.js";
import { MovieListWrapper } from "../../styles/MovieListWrapper.styles.js";
import { MovieByGenderWrapper } from "./MovieByGender.styles.js";
import TitlePage from "../../componentes/TitlePage/TitlePage.js";

import { useLocation } from "react-router";

const MovieByGender = () => {
  let { gender } = useParams();
  let data = useLocation();

  const {
    isLoading,
    error,
    data: moviesByGender,
  } = useQuery({
    queryKey: ["movieByGender"],
    queryFn: () => movie.getMoviesByGenre(gender),
  });

  //Verify if the data is loading
  if (isLoading) return <Loading />;

  //Verify if a error ocurred
  if (error) return <Error error={error.message} />;

  return (
    <MovieListWrapper>
      <MovieByGenderWrapper>
        <TitlePage title={data.state.genderName} />
        <MovieList canDelete={false} movies={moviesByGender} />
      </MovieByGenderWrapper>
    </MovieListWrapper>
  );
};

export default MovieByGender