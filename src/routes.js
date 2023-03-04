// import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Error from "./componentes/Error/Error";

import Header from "./componentes/Header/Header";
// import Loading from "./componentes/Loading/Loading";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import { MovieByGender } from "./pages/MovieByGender/MovieByGender";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import NotFound from "./pages/NotFound/NotFound";
// import { userServices } from "./services/api";

const RoutesApp = () => {
  // const {
  //   isLoading,
  //   error,
  //   data: user,
  // } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: userServices.getUserById,
  // });

  //Verify if the data is loading
  // if (isLoading) return <Loading />;

  // //Verify if a error ocurred
  // if (error) return <Error error={error.message} />;

  return (
    <BrowserRouter>
      <Header userName={""} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/my-movies" element={<Favorites />} />
        <Route path="/filter-movie/:gender" element={<MovieByGender />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default memo(RoutesApp);
