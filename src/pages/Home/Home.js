import { useQuery } from "@tanstack/react-query";
import Error from "../../componentes/Error/Error";
import Loading from "../../componentes/Loading/Loading";
import MovieList from "../../componentes/MovieList/MovieList";
import SearchInput from "../../componentes/SearchInput/SearchInput";
import { movie } from "../../services/movies";
import { HomeWrapper } from "./home.styles";

import "./home.styles.js";
import Dropdown from "../../componentes/Dropdown/Dropdown";
import { MovieListWrapper } from "../../styles/MovieListWrapper.styles";
import MovieCaroussel from "../../layout/caroussel/MovieCaroussel";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  // const [input, setInput] = useState("");

  // Getting the latest movies
  const latestMoviesQuery = useQuery({
    queryKey: ["movies"],
    queryFn: movie.getMovies,
  });

  // Getting the top rated movies
  const topRatedQuery = useQuery({
    queryKey: ["topRated"],
    queryFn: movie.getTopRatedsMovies,
  });
  // const query =
  //   "Diga em uma palavra qual serviço de streaming them o filme pulp fiction";
  // useEffect(() => {
  //   const options = {
  //     method: "POST",
  //     url: "https://openai80.p.rapidapi.com/chat/completions",
  //     headers: {
  //       "content-type": "application/json",
  //       "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  //       "X-RapidAPI-Host": "openai80.p.rapidapi.com",
  //     },
  //     body: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${query}"}]}`,
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  useEffect(() => {

  //In development
  // Getting movie by title
  // const movieByTitle = useQuery({
  //   queryKey: ["title"],
  //   queryFn: movie.getMovieByTitle,
  // });
  // console.log(movieByTitle.data.results[0]);

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
          <SearchInput handleChange={() => {}} placeholder={"Pesquisar"} />
          <Dropdown />
        </div>
        <MovieCaroussel movies={latestMoviesQuery.data} />
        <MovieList movies={topRatedQuery.data} />
      </HomeWrapper>
    </MovieListWrapper>
  );
};
export default Home;
