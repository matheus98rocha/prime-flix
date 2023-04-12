import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import Error from "../../componentes/Error/Error";
import Loading from "../../componentes/Loading/Loading";
import MovieList from "../../componentes/MovieList/MovieList";
import SearchInput from "../../componentes/SearchInput/SearchInput";
import { movie } from "../../services/movies";
import { HomeWrapper } from "./home.styles";
import { handleFilterMovies } from "../../utils/filterMovies";

import "./home.styles.js";
import Dropdown from "../../componentes/Dropdown/Dropdown";
import { MovieListWrapper } from "../../styles/MovieListWrapper.styles";
import MovieCaroussel from "../../layout/caroussel/MovieCaroussel";

const Home = () => {
  const [input, setInput] = useState("");

  // Getting the latest movies
  const latestMoviesQuery = useQuery({
    queryKey: ["movies"],
    queryFn: movie.getMovies,
  });

  // Getting the top rated movies
  const topRatedQuery = useQuery({
    queryKey: ["teams"],
    queryFn: movie.getTopRatedsMovies,
  });

  //Filtering the movie list by the input
  const filterMovies = useMemo(() => {
    return input.length > 0
      ? handleFilterMovies(latestMoviesQuery.data, input)
      : latestMoviesQuery.data;
  }, [input, latestMoviesQuery.data]);

  //Verify if the data is loading
  if (topRatedQuery.isLoading || latestMoviesQuery.isLoading)
    return <Loading />;

  //Verify if a error ocurred
  if (topRatedQuery.error || latestMoviesQuery.error)
    return <Error error={latestMoviesQuery.error.message} />;

  return (
    <MovieListWrapper>
      <HomeWrapper>
        <div className="control-wrapper">
          <SearchInput handleChange={setInput} placeholder={"Pesquisar"} />
          <Dropdown />
        </div>
        {input.length === 0 ? <MovieCaroussel movies={filterMovies} /> : null}
        <MovieList movies={topRatedQuery.data} />
      </HomeWrapper>
    </MovieListWrapper>
  );
};
export default Home;
