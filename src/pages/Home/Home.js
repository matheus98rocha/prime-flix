import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import Error from "../../componentes/Error/Error";
import Loading from "../../componentes/Loading/Loading";
import MovieList from "../../componentes/MovieList/MovieList";
import SearchInput from "../../componentes/SearchInput/SearchInput";
import { movie } from "../../services/movies";

import "./home.css";

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
  const filterInput = useMemo(() => {
    return input.length > 0
      ? movies.filter((movie) =>
          movie.title.toLowerCase().startsWith(input.toLowerCase())
        )
      : movies;
  }, [input, movies]);

  //Verify if the data is loading
  if (isLoading) return <Loading />;

  //Verify if a error ocurred
  if (error) return <Error error={error.message} />;

  return (
    <div className="home">
      <SearchInput handleChange={setInput} placeholder={"Pesquisar"} />
      <MovieList movies={filterInput} />
    </div>
  );
};
export default Home;
