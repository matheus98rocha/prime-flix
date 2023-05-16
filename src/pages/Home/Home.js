import { useQuery } from "@tanstack/react-query";
import Error from "../../componentes/Error/Error";
import Loading from "../../componentes/Loading/Loading";
import { movie } from "../../services/movies";
import { HomeWrapper } from "./home.styles";

import "./home.styles.js";
import { MovieListWrapper } from "../../styles/MovieListWrapper.styles";
import MovieCaroussel from "../../layout/caroussel/MovieCaroussel";
import MovieList from "../../layout/MovieList/MovieList";
import SearchInput from "./components/SearchInput/SearchInput";
import Dropdown from "./components/Dropdown/Dropdown";

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
