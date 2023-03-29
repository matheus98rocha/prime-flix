import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import Error from "../../componentes/Error/Error";
import Loading from "../../componentes/Loading/Loading";
import MovieList from "../../layout/MovieList/MovieList";
import SearchInput from "../../componentes/SearchInput/SearchInput";
import { movie } from "../../services/movies";
import { HomeWrapper } from "./home.styles";
import { handleFilterMovies } from "../../utils/filterMovies";

import "./home.styles.js";
import Dropdown from "../../componentes/Dropdown/Dropdown";
import { MovieListWrapper } from "../../styles/MovieListWrapper.styles";

const Home = () => {
  const [input, setInput] = useState("");
  const {
    isLoading,
    error,
    data: movies,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: movie.getMovies,
  });

  //Filtering the movie list by the input
  const filterMovies = useMemo(() => {
    return input.length > 0 ? handleFilterMovies(movies, input) : movies;
  }, [input, movies]);

  //Verify if the data is loading
  if (isLoading) return <Loading />;

  //Verify if a error ocurred
  if (error) return <Error error={error.message} />;

  return (
    <MovieListWrapper>
      <HomeWrapper>
        <div className="control-wrapper">
          <SearchInput handleChange={setInput} placeholder={"Pesquisar"} />
          <Dropdown />
        </div>
        <MovieList movies={filterMovies} />
      </HomeWrapper>
    </MovieListWrapper>
  );
};
export default Home;
