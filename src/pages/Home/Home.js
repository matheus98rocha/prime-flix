import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Error from "../../componentes/Error/Error";
import Loading from "../../componentes/Loading/Loading";
import { getMovies } from "../../services/movies";

import "./home.css";

const Home = () => {
  const [input, setInput] = useState("");
  const {
    isLoading,
    error,
    data: movies,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
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
      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder={"Search a movie"}
      />
      <div className="movies">
        {filterInput.map((movie) => {
          return (
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <div className="imageWrapper">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              </div>
              <Link to={`/movie/${movie.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
