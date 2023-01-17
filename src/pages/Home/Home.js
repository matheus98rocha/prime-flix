import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
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
      <input onChange={(e) => setInput(e.target.value)} />
      <div className="movies">
        {filterInput.map((e) => {
          return (
            <div key={e.id}>
              <p>{e.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
